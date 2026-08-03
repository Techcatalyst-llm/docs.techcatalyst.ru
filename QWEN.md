# docs.techcatalyst.ru — Project Instructions

## Project Overview

Публичный документационный сайт Techcatalyst. Next.js App Router + Tailwind, PM2. Контент должен соответствовать спекам продуктов (techcatalyst_takt/specs, techcatalyst_guard/specs); изменение capability-спеки влечёт обновление соответствующей страницы.

## Spec-Driven Development (OpenSpec)

- `specs/` — source of truth: что система делает сейчас (`specs/project.md`, capability-спеки: Requirements/Scenarios/Implementation/Verification).
- `changes/` — что меняем дальше и почему: 4 фазы explore → propose → apply → archive (`changes/README.md`).
- Никакого изменения поведения без change-артефакта; коммиты атрибутируются `[<change-id>] <summary>` + строка `Change: <change-id>` в теле. Без артефакта — `[no-change]` с обоснованием.
- Для инициатив из триггер-листа (фича, workflow change, automation effort, enterprise requirement, значимая UI/backend задача) Product Squad discovery обязателен ДО propose.

## Agent Skills (5-skill workflow)

5 скилов склонированы в корень (каждый — отдельный git-репо с remote в `Techcatalyst-llm`):

- `.cto-skill/` — делает (реализация, архитектурные решения). Начало сессии: читать `.cto-skill/SKILL.md`; значимые решения/контекст писать в `.cto-skill/data/` и сразу коммитить+пушить оттуда.
- `.qa-skill/` — независимая верификация против спеки после каждого CTO-этапа. Вердикты: verified / with-bugs / not-implemented / needs-testing / ambiguous-spec. Gate PASS/FAIL; critical/high дефекты не проходят. Отчёты в `.qa-skill/data/verifications/`, дефекты в `.qa-skill/data/defects/`.
- `.product-squad-skill/` — что строим, для кого и зачем. Обязательный SDD Opportunity Research Subcycle перед propose для инициатив из триггер-листа (`templates/sdd-opportunity-research.md` → `data/research/`).
- `.orchestrator-skill/` — секвенсор этапов, handoffs, состояние в `.orchestrator-skill/data/state/` (читать первым).
- `.security-engineer-skill/` — security-верификация enterprise-уровня; может блокировать релиз на critical/high.

Пайплайн: Product Squad (discovery) → CTO (делает) → QA (валидирует технику) → Product Squad (валидирует бизнес-соответствие) → Security Engineer (безопасность) — оркестрирует Orchestrator. Для всех скилов: `git pull` перед работой, commit+push после каждой значимой записи в `data/`.

## Coexistence with Other AI Tools

- `.claude/`, `CLAUDE.md`, `AGENTS.md` — конфигурации других инструментов (не менять без запроса).
- Этот файл (QWEN.md) — контекст Qwen Code.
- Skill-директории в `.gitignore` (каждая — свой git-репо).

## Language

Пользователь общается в неформальном русском. Отвечай по-русски, если не просят иначе. Технические артефакты (код, пути, команды) — на английском.
