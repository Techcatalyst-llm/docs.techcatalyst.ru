import { NextResponse } from 'next/server'
import { access, readFile } from 'node:fs/promises'
import path from 'node:path'
import { publicDocFiles } from '../../../../content'

export const runtime = 'nodejs'

const contentTypes: Record<string, string> = {
  '.txt': 'text/plain; charset=utf-8',
  '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
}

const docDirectories = [
  '/var/www/techcatalyst-admin-panel/docs',
  '/var/www/docs',
  path.join(process.cwd(), '..', 'docs'),
  path.join(process.cwd(), '..', 'techcatalyst-admin-panel', 'docs'),
]

async function resolveDocPath(file: string) {
  for (const directory of docDirectories) {
    const candidatePath = path.join(directory, file)

    try {
      await access(candidatePath)
      return candidatePath
    } catch {
      continue
    }
  }

  return null
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ file: string }> }
) {
  const { file } = await params
  const doc = publicDocFiles.get(file)

  if (!doc) {
    return NextResponse.json({ error: 'File not found' }, { status: 404 })
  }

  const absolutePath = await resolveDocPath(file)

  if (!absolutePath) {
    return NextResponse.json({ error: 'Unable to read file' }, { status: 404 })
  }

  try {
    const buffer = await readFile(absolutePath)
    const extension = path.extname(file)

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': contentTypes[extension] ?? 'application/octet-stream',
        'Content-Disposition': `inline; filename="${file}"`,
        'Cache-Control': 'public, max-age=300',
      },
    })
  } catch {
    return NextResponse.json({ error: 'Unable to read file' }, { status: 404 })
  }
}
