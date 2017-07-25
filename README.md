# Git Tips

Часто используемые трюки и советы при работе с Git.

Хотите дополнить список? Ознакомьтесь с [CONTRIBUTING.md](CONTRIBUTING.md)

[English](http://git.io/git-tips) | [中文](https://github.com/521xueweihan/git-tips) | [Русский](https://github.com/Imangazaliev/git-tips)

### Tools:

* [git-tip](https://www.npmjs.com/package/git-tip) - консольная утилита, облегчающая использование всех этих команд. Docker-контейнер можно найти [здесь](https://github.com/djoudi5/docker-git-tip)

**P.S:** Все эти команды были проверены в `git version 2.7.4 (Apple Git-66)`

<!-- @doxie.inject start toc -->
<!-- Don’t remove or change the comment above – that can break automatic updates. -->
### Branch

- [Создать новую ветку и переключиться на нее](#Создать-новую-ветку-и-переключиться-на-нее)
- [Создать новую ветку без родительской ветки](#Создать-новую-ветку-без-родительской-ветки)
- [Быстрое переключение на предыдущую ветку](#Быстрое-переключение-на-предыдущую-ветку)
- [Список локальных и удаленных веток](#Список-локальных-и-удаленных-веток)
- [Список веток в удаленном репозитории](#Список-веток-в-удаленном-репозитории)
- [Показать все ветки (в том числе и удаленные ветки), а так же последний коммит в них](#Показать-все-ветки-в-том-числе-и-удаленные-ветки-а-так-же-последний-коммит-в-них)
- [Переименовать ветку](#Переименовать-ветку)
- [Удалить локальную ветку](#Удалить-локальную-ветку)
- [Удалить ветку в удаленном репозитории](#Удалить-ветку-в-удаленном-репозитории)
- [Показать название текущей ветки](#Показать-название-текущей-ветки)
- [Показать все ветки, не слитые в master](#Показать-все-ветки-не-слитые-в-master)
- [Показать список веток, которые уже слиты с веткой master](#Показать-список-веток-которые-уже-слиты-с-веткой-master)
- [Переместить ветку feature на master и слить ее в мастер](#Переместить-ветку-feature-на-master-и-слить-ее-в-мастер)
- [Удалить ветки, которые уже слиты с master](#Удалить-ветки-которые-уже-слиты-с-master)
- [Найти ветки, которые содержат коммит с указанным хешем](#Найти-ветки-которые-содержат-коммит-с-указанным-хешем)
- [Track upstream branch](#track-upstream-branch)

### Clean

- [Принудительно удалить неотслеживаемые файлы](#Принудительно-удалить-неотслеживаемые-файлы)
- [Принудительно удалить неотслеживаемые файлы и директории](#Принудительно-удалить-неотслеживаемые-файлы-и-директории)
- [Удалить все файлы, которые находятся в `.gitignore`](#Удалить-все-файлы-которые-находятся-в-gitignore)
- [Before deleting untracked files/directory, do a dry run to get the list of these files/directories](#before-deleting-untracked-filesdirectory-do-a-dry-run-to-get-the-list-of-these-filesdirectories)
- [Dry run (any command that supports dry-run flag should do)](#dry-run-any-command-that-supports-dry-run-flag-should-do)

### Commit

- [Изменить сообщение последнего коммита](#Изменить-сообщение-последнего-коммита)
- [Изменить предыдущий коммит без изменения сообщения к коммиту](#Изменить-предыдущий-коммит-без-изменения-сообщения-к-коммиту)
- [Исправить имя автора последнего коммита](#Исправить-имя-автора-последнего-коммита)
- [Reset author, after author has been changed in the global config](#reset-author-after-author-has-been-changed-in-the-global-config)
- [Создать коммит только с указанными файлами](#Создать-коммит-только-с-указанными-файлами)
- [Сделать коммит, обойдя хуки pre-commit и commit-msg](#Сделать-коммит-обойдя-хуки-pre-commit-и-commit-msg)
- [Отметить коммит как исправление к указанному коммиту](#Отметить-коммит-как-исправление-к-указанному-коммиту)

### Config

- [Показать конфиг и все псевдонимы (alias)](#Показать-конфиг-и-все-псевдонимы-alias)
- [Изменить локальный/глобальный конфиг git](#Изменить-локальныйглобальный-конфиг-git)
- [Изменить текстовый редактор](#Изменить-текстовый-редактор)
- [Игнорировать изменения прав доступа к файлам при коммите](#Игнорировать-изменения-прав-доступа-к-файлам-при-коммите)
- [Сделать git чувствительным к регистру](#Сделать-git-чувствительным-к-регистру)
- [Включить автоматическое исправление опечаток](#Включить-автоматическое-исправление-опечаток)
- [Отключить цветной вывод Git](#Отключить-цветной-вывод-git)
- [Specific color settings](#specific-color-settings)
- [Удалить запись из глобального конфига](#Удалить-запись-из-глобального-конфига)
- [Reuse recorded resolution, record and reuse previous conflicts resolutions](#reuse-recorded-resolution-record-and-reuse-previous-conflicts-resolutions)
- [Всегда выполнять перемещение вместо слияния при получении изменений из удаленного репозитория](#Всегда-выполнять-перемещение-вместо-слияния-при-получении-изменений-из-удаленного-репозитория)
- [Псевдонимы (alias) для команд Git](#Псевдонимы-alias-для-команд-git)

### Diff

- [Показать изменения с момента последнего коммита](#Показать-изменения-с-момента-последнего-коммита)
- [Показать все изменения (для файлов которых нет в индексе и которые уже там)](#Показать-все-изменения-для-файлов-которых-нет-в-индексе-и-которые-уже-там)
- [Изменения в файлах, которые находятся в индексе](#Изменения-в-файлах-которые-находятся-в-индексе)
- [Показывать изменения в одну строку](#Показывать-изменения-в-одну-строку)
- [Показать список конфликтующих файлов](#Показать-список-конфликтующих-файлов)
- [Открыть все конфликтующие файлы в редакторе](#Открыть-все-конфликтующие-файлы-в-редакторе)
- [Список всех файлов, которые были изменены в коммите](#Список-всех-файлов-которые-были-изменены-в-коммите)

### Index

- [Интерактивное добавление файлов в индекс](#Интерактивное-добавление-файлов-в-индекс)
- [Добавить в индекс часть файла](#Добавить-в-индекс-часть-файла)
- [Удалить файл из индекса](#Удалить-файл-из-индекса)
- [Удалить все файлы из индекса](#Удалить-все-файлы-из-индекса)

### Log

- [Показать логи за определенный период (от-до)](#Показать-логи-за-определенный-период-от-до)
- [Показать коммиты за указанный промежуток времени](#Показать-коммиты-за-указанный-промежуток-времени)
- [Показать историю коммитов, сгрупировав их по имени автора](#Показать-историю-коммитов-сгрупировав-их-по-имени-автора)
- [Показать историю коммитов, исключив коммиты указанного автора](#Показать-историю-коммитов-исключив-коммиты-указанного-автора)
- [Показать коммиты и изменения в них для определенного файла (даже если он был переименован)](#Показать-коммиты-и-изменения-в-них-для-определенного-файла-даже-если-он-был-переименован)
- [List only the root and merge commits](#list-only-the-root-and-merge-commits)
- [Показать незапушенные коммиты](#Показать-незапушенные-коммиты)
- [Показать все коммиты с момента отделения от ветки master](#Показать-все-коммиты-с-момента-отделения-от-ветки-master)
- [Коммиты в ветке branch-1, которых нет в branch-2](#Коммиты-в-ветке-branch-1-которых-нет-в-branch-2)
- [Показать GPG-сигнатуру в истории коммитов](#Показать-gpg-сигнатуру-в-истории-коммитов)
- [Показать количество строк, которое добавил/удалил пользователь](#Показать-количество-строк-которое-добавилудалил-пользователь)
- [Поиск в истории коммитов по регулярному выражению](#Поиск-в-истории-коммитов-по-регулярному-выражению)
- [Показать все заметки (git notes)](#Показать-все-заметки-git-notes)
- [Показать дерево тегов (версий)](#Показать-дерево-тегов-версий)
- [Get first commit in a branch (from master)](#get-first-commit-in-a-branch-from-master)

### Merge

- [Слить ветку feature с master, объединив все коммиты ветки feature в один](#Слить-ветку-feature-с-master-объединив-все-коммиты-ветки-feature-в-один)

### Push

- [Отправить коммиты в удаленный репозиторий, перезаписав историю (force push)](#Отправить-коммиты-в-удаленный-репозиторий-перезаписав-историю-force-push)
- [Forced push but still ensure you don't overwrite other's work](#forced-push-but-still-ensure-you-dont-overwrite-others-work)

### Show

- [Показать изменения в коммите](#Показать-изменения-в-коммите)
- [Показать изменения в коммите (по хешу)](#Показать-изменения-в-коммите-по-хешу)

### Stash

- [Спрятать текущие изменения для отслеживаемых файлов](#Спрятать-текущие-изменения-для-отслеживаемых-файлов)
- [Спрятать текущие изменения, включая неотслеживаемые файлы](#Спрятать-текущие-изменения-включая-неотслеживаемые-файлы)
- [Спрятать текущие изменения за исключением файлов в индексе](#Спрятать-текущие-изменения-за-исключением-файлов-в-индексе)
- [Спрятать только часть файла (файлов)](#Спрятать-только-часть-файла-файлов)
- [Показать список спрятанных изменений](#Показать-список-спрятанных-изменений)
- [Применить последние спрятанные изменения и удалить их из стека](#Применить-последние-спрятанные-изменения-и-удалить-их-из-стека)
- [Применить последние спрятанные изменения без удаления их из стека](#Применить-последние-спрятанные-изменения-без-удаления-их-из-стека)
- [Извлечь отдельный файл из stash](#Извлечь-отдельный-файл-из-stash)
- [Очистить stash](#Очистить-stash)

### Tags

- [Создать новый тег](#Создать-новый-тег)
- [Отправить теги на удаленный репозиторий](#Отправить-теги-на-удаленный-репозиторий)
- [Удалить тег в локальном репозитории](#Удалить-тег-в-локальном-репозитории)
- [Удалить тег в удаленном репозитории](#Удалить-тег-в-удаленном-репозитории)

### Разное

- [Everyday Git in twenty commands or so](#everyday-git-in-twenty-commands-or-so)
- [Show helpful guides that come with Git](#show-helpful-guides-that-come-with-git)
- [Клонировать отдельную ветку](#Клонировать-отдельную-ветку)
- [Клонировать репозиторий с указаным количеством коммитов](#Клонировать-репозиторий-с-указаным-количеством-коммитов)
- [Импортировать пакет в репозиторий](#Импортировать-пакет-в-репозиторий)
- [Alias: git undo](#alias-git-undo)
- [Получить данные из удаленного репозитория и сбросить состояние текущей ветки к ним](#Получить-данные-из-удаленного-репозитория-и-сбросить-состояние-текущей-ветки-к-ним)
- [Prunes references to remote branches that have been deleted in the remote](#prunes-references-to-remote-branches-that-have-been-deleted-in-the-remote)
- [Загрузить пулл-реквест в текущую ветку по ID](#Загрузить-пулл-реквест-в-текущую-ветку-по-id)
- [Specific fetch reference](#specific-fetch-reference)
- [List of all files till a commit](#list-of-all-files-till-a-commit)
- [Git reset first commit](#git-reset-first-commit)
- [Показать самый последний тег на текущей ветке](#Показать-самый-последний-тег-на-текущей-ветке)
- [Revert: отменить коммит с помощью нового коммита](#revert-отменить-коммит-с-помощью-нового-коммита)
- [Revert: отменить слияние (merge) с помощью нового коммита](#revert-отменить-слияние-merge-с-помощью-нового-коммита)
- [Reset: Отменить коммиты (сброс к указанному коммиту)](#reset-Отменить-коммиты-сброс-к-указанному-коммиту)
- [Показать историю коммитов только для текущей ветки](#Показать-историю-коммитов-только-для-текущей-ветки)
- [Показать список удаленных репозиториев](#Показать-список-удаленных-репозиториев)
- [Изменить URL удаленного репозитория](#Изменить-url-удаленного-репозитория)
- [List references in a remote repository](#list-references-in-a-remote-repository)
- [Добавить удаленный репозиторий](#Добавить-удаленный-репозиторий)
- [Автокомплит Git-команд в bash](#Автокомплит-git-команд-в-bash)
- [Перенести коммиты из одной ветки в другую с помощью cherry-pick](#Перенести-коммиты-из-одной-ветки-в-другую-с-помощью-cherry-pick)
- [Undo local changes with the last content in head](#undo-local-changes-with-the-last-content-in-head)
- [Показать все отслеживаемы файлы](#Показать-все-отслеживаемы-файлы)
- [Показать все неотслеживаемые файлы](#Показать-все-неотслеживаемые-файлы)
- [Показать все игнорируемые файлы](#Показать-все-игнорируемые-файлы)
- [Create new working tree from a repository (git 2.5)](#create-new-working-tree-from-a-repository-git-25)
- [Create new working tree from HEAD state](#create-new-working-tree-from-head-state)
- [Не отслеживать файл (без удаления)](#Не-отслеживать-файл-без-удаления)
- [Обновить все субмодули](#Обновить-все-субмодули)
- [Показать коммиты текущей ветки, которые будут слиты в мастер](#Показать-коммиты-текущей-ветки-которые-будут-слиты-в-мастер)
- [Retrieve the commit hash of the initial revision](#retrieve-the-commit-hash-of-the-initial-revision)
- [Deploying git tracked subfolder to gh-pages](#deploying-git-tracked-subfolder-to-gh-pages)
- [Adding a project to repo using subtree](#adding-a-project-to-repo-using-subtree)
- [Get latest changes in your repo for a linked project using subtree](#get-latest-changes-in-your-repo-for-a-linked-project-using-subtree)
- [Экспортировать ветку в файл (создать пакет)](#Экспортировать-ветку-в-файл-создать-пакет)
- [Архивировать ветку master](#Архивировать-ветку-master)
- [Ignore one file on commit (e.g. Changelog)](#ignore-one-file-on-commit-eg-changelog)
- [Спрятать изменения перед выполнением перемещения](#Спрятать-изменения-перед-выполнением-перемещения)
- [Show changes using common diff tools](#show-changes-using-common-diff-tools)
- [Don’t consider changes for tracked file](#dont-consider-changes-for-tracked-file)
- [Undo assume-unchanged](#undo-assume-unchanged)
- [Восстановить удаленный файл](#Восстановить-удаленный-файл)
- [Restore file to a specific commit-hash](#restore-file-to-a-specific-commit-hash)
- [Check if the change was a part of a release](#check-if-the-change-was-a-part-of-a-release)
- [Squash fixup commits normal commits](#squash-fixup-commits-normal-commits)
- [Показать список игнорируемых файлов](#Показать-список-игнорируемых-файлов)
- [Статус игнорируемых файлов](#Статус-игнорируемых-файлов)
- [Count unpacked number of objects and their disk consumption](#count-unpacked-number-of-objects-and-their-disk-consumption)
- [Prune all unreachable objects from the object database](#prune-all-unreachable-objects-from-the-object-database)
- [Instantly browse your working repository in gitweb](#instantly-browse-your-working-repository-in-gitweb)
- [Получить файл из другой ветки](#Получить-файл-из-другой-ветки)
- [Изменить коммиты в интерактивном режиме](#Изменить-коммиты-в-интерактивном-режиме)
- [Поиск коммита с багом при помощи бинарного поиска](#Поиск-коммита-с-багом-при-помощи-бинарного-поиска)
- [Показать все локальные ветки, отсортировав их по дате изменения](#Показать-все-локальные-ветки-отсортировав-их-по-дате-изменения)
- [Find lines matching the pattern (regex or string) in tracked files](#find-lines-matching-the-pattern-regex-or-string-in-tracked-files)
- [Количество коммитов в ветке](#Количество-коммитов-в-ветке)
- [Добавить заметку](#Добавить-заметку)
- [Apply commit from another repository](#apply-commit-from-another-repository)
- [Найти общего предка двух веток](#Найти-общего-предка-двух-веток)
- [Показывает автора, время и хеш-коммита последнего изменения для каждой строки файла](#Показывает-автора-время-и-хеш-коммита-последнего-изменения-для-каждой-строки-файла)
- [Показывает автора, время и хеш-коммита последнего изменения для указанного диапазона строк](#Показывает-автора-время-и-хеш-коммита-последнего-изменения-для-указанного-диапазона-строк)
- [Show a Git logical variable](#show-a-git-logical-variable)
- [Preformatted patch file](#preformatted-patch-file)
- [Показать название репозитория](#Показать-название-репозитория)
- [Generates a summary of pending changes](#generates-a-summary-of-pending-changes)
- [Сделать резервную копию неотслеживаемых файлов](#Сделать-резервную-копию-неотслеживаемых-файлов)


<!-- Don’t remove or change the comment below – that can break automatic updates. More info at <http://npm.im/doxie.inject>. -->
<!-- @doxie.inject end toc -->


<!-- @doxie.inject start -->
<!-- Don’t remove or change the comment above – that can break automatic updates. -->

## Branch

### Создать новую ветку и переключиться на нее
```sh
git checkout -b <branch-name>
```

__Alternatives:__
```sh
git branch <branch-name> && git checkout <branch-name>
```

### Создать новую ветку без родительской ветки
```sh
git checkout --orphan <branch-name>
```

### Быстрое переключение на предыдущую ветку
```sh
git checkout -
```

### Список локальных и удаленных веток
```sh
git branch -a
```

### Список веток в удаленном репозитории
```sh
git branch -r
```

### Показать все ветки (в том числе и удаленные ветки), а так же последний коммит в них
```sh
git branch -vv
```

### Переименовать ветку
```sh
git branch -m <new-branch-name>
```

__Alternatives:__
```sh
git branch -m [<old-branch-name>] <new-branch-name>
```

### Удалить локальную ветку
```sh
git branch -d <local-branch-name>
```

### Удалить ветку в удаленном репозитории
```sh
git push origin --delete <remote-branch-name>
```

__Alternatives:__
```sh
git push origin :<remote-branch-name>
```

### Показать название текущей ветки
```sh
git rev-parse --abbrev-ref HEAD
```

### Показать все ветки, не слитые в master
```sh
git checkout master && git branch --no-merged
```

### Показать список веток, которые уже слиты с веткой master
```sh
git branch --merged master
```

### Переместить ветку feature на master и слить ее в мастер
```sh
git rebase master feature && git checkout master && git merge -
```

### Удалить ветки, которые уже слиты с master
```sh
git branch --merged master | grep -v '^\*' | xargs -n 1 git branch -d
```

__Alternatives:__
```sh
git branch --merged master | grep -v '^\*\|  master' | xargs -n 1 git branch -d # will not delete master if master is not checked out
```

### Найти ветки, которые содержат коммит с указанным хешем
```sh
git branch -a --contains <commit-ish>
```

__Alternatives:__
```sh
git branch --contains <commit-ish>
```

### Track upstream branch
```sh
git branch -u origin/mybranch
```

## Clean

### Принудительно удалить неотслеживаемые файлы
```sh
git clean -f
```

### Принудительно удалить неотслеживаемые файлы и директории
```sh
git clean -f -d
```

__Alternatives:__
```sh
git clean -df
```

### Удалить все файлы, которые находятся в `.gitignore`
```sh
git clean -X -f
```

### Before deleting untracked files/directory, do a dry run to get the list of these files/directories
```sh
git clean -n
```

### Dry run (any command that supports dry-run flag should do)
```sh
git clean -fd --dry-run
```

## Commit

### Изменить сообщение последнего коммита
При выполнении команды откроется редактор, указанный в настройках git. Необходимо изменить текст сообщения, сохранить файл и закрыть редактор.

Сообщение можно указать и непосредственно при вызове команды с помощью опции `-m` (`--message`)
```sh
git commit --amend

# можно указать сообщение с помощью опции -m
git commit --amend -m "New message"
```

### Изменить предыдущий коммит без изменения сообщения к коммиту
```sh
git commit --amend --no-edit
```

### Исправить имя автора последнего коммита
```sh
git commit --amend --no-edit --author='Author Name <email@address.com>'
```

### Reset author, after author has been changed in the global config
```sh
git commit --amend --reset-author --no-edit
```

### Создать коммит только с указанными файлами
```sh
git commit --only <file_path>
```

### Сделать коммит, обойдя хуки pre-commit и commit-msg
```sh
git commit --no-verify
```

__Alternatives:__
```sh
git commit -n
```

### Отметить коммит как исправление к указанному коммиту
```sh
git commit --fixup <SHA-1>
```

## Config

### Показать конфиг и все псевдонимы (alias)
```sh
git config --list
```

### Изменить локальный/глобальный конфиг git
```sh
git config [--global] --edit
```

### Изменить текстовый редактор
```sh
git config --global core.editor '$EDITOR'
```

### Игнорировать изменения прав доступа к файлам при коммите
```sh
git config core.fileMode false
```

### Сделать git чувствительным к регистру
```sh
git config --global core.ignorecase false
```

### Включить автоматическое исправление опечаток
```sh
git config --global help.autocorrect 1
```

### Отключить цветной вывод Git
```sh
git config --global color.ui false
```

### Specific color settings
```sh
git config --global <specific command e.g branch, diff> <true, false or always>
```

### Удалить запись из глобального конфига
```sh
git config --global --unset <entry-name>
```

### Reuse recorded resolution, record and reuse previous conflicts resolutions
```sh
git config --global rerere.enabled 1
```

### Всегда выполнять перемещение вместо слияния при получении изменений из удаленного репозитория
```sh
git config --global pull.rebase true
```

__Alternatives:__
```sh
#git < 1.7.9
git config --global branch.autosetuprebase always
```

### Псевдонимы (alias) для команд Git
```sh
git config --global alias.<handle> <command> 
git config --global alias.st status
```

## Diff

### Показать изменения с момента последнего коммита
```sh
git diff
```

### Показать все изменения (для файлов которых нет в индексе и которые уже там)
```sh
git diff HEAD
```

### Изменения в файлах, которые находятся в индексе
```sh
git diff --cached
```

__Alternatives:__
```sh
git diff --staged
```

### Показывать изменения в одну строку
```sh
git diff --word-diff
```

### Показать список конфликтующих файлов
```sh
git diff --name-only --diff-filter=U
```

### Открыть все конфликтующие файлы в редакторе
```sh
git diff --name-only | uniq | xargs $EDITOR
```

### Список всех файлов, которые были изменены в коммите
```sh
git diff-tree --no-commit-id --name-only -r <commit-ish>
```

## Index

### Интерактивное добавление файлов в индекс
```sh
git add -i
```

### Добавить в индекс часть файла
```sh
git add -p
```

### Удалить файл из индекса
```sh
git reset HEAD <file-name>
```

### Удалить все файлы из индекса
```sh
git reset HEAD
```

## Log

### Показать логи за определенный период (от-до)
```sh
git log --since='FEB 1 2017' --until='FEB 14 2017'
```

### Показать коммиты за указанный промежуток времени
```sh
git log --no-merges --raw --since='2 weeks ago'
```

__Alternatives:__
```sh
git whatchanged --since='2 weeks ago'
```

### Показать историю коммитов, сгрупировав их по имени автора
```sh
git shortlog
```

### Показать историю коммитов, исключив коммиты указанного автора
```sh
git log --perl-regexp --author='^((?!excluded-author-regex).*)

```

### Показать коммиты и изменения в них для определенного файла (даже если он был переименован)
```sh
git log --follow -p -- <file_path>
```

### List only the root and merge commits
```sh
git log --first-parent
```

### Показать незапушенные коммиты
```sh
git log --branches --not --remotes
```

__Alternatives:__
```sh
git log @{u}..
```

```sh
git cherry -v
```

### Показать все коммиты с момента отделения от ветки master
```sh
git log --no-merges --stat --reverse master..
```

### Коммиты в ветке branch-1, которых нет в branch-2
```sh
git log branch-1 ^branch-2
```

### Показать GPG-сигнатуру в истории коммитов
```sh
git log --show-signature
```

### Показать количество строк, которое добавил/удалил пользователь
```sh
git log --author='Your Name Here' --pretty=tformat: --numstat | gawk '{ add += <!-- @doxie.inject start -->; subs += <!-- @doxie.inject end -->; loc += <!-- @doxie.inject start --> - <!-- @doxie.inject end --> } END { printf "added lines: %s removed lines: %s total lines: %s
", add, subs, loc }' -
```

__Alternatives:__
```sh
git log --author='Your Name Here' --pretty=tformat: --numstat | awk '{ add += <!-- @doxie.inject start -->; subs += <!-- @doxie.inject end -->; loc += <!-- @doxie.inject start --> - <!-- @doxie.inject end --> } END { printf "added lines: %s, removed lines: %s, total lines: %s
", add, subs, loc }' - # on Mac OSX
```

### Поиск в истории коммитов по регулярному выражению
```sh
git log --all --grep='<given-text>'
```

### Показать все заметки (git notes)
```sh
git log --show-notes='*'
```

### Показать дерево тегов (версий)
```sh
git log --pretty=oneline --graph --decorate --all
```

__Alternatives:__
```sh
gitk --all
```

### Get first commit in a branch (from master)
```sh
git log master..<branch-name> --oneline | tail -1
```

## Merge

### Слить ветку feature с master, объединив все коммиты ветки feature в один
При этом коммит слияния не будет создан, вам нужно будет сделать его вручную.
```sh
git merge feature --squash
```

## Push

### Отправить коммиты в удаленный репозиторий, перезаписав историю (force push)
```sh
git push --force
```

__Alternatives:__
```sh
git push -f
```

### Forced push but still ensure you don't overwrite other's work
```sh
git push --force-with-lease <remote-name> <branch-name>
```

## Show

### Показать изменения в коммите
Также можно использовать `HEAD~1`, `HEAD~2` и т.д. для просмотра предыдущих коммитов.
```sh
git show HEAD
```

### Показать изменения в коммите (по хешу)
```sh
git show <commit-ish>
```

## Stash

### Спрятать текущие изменения для отслеживаемых файлов
```sh
git stash
```

__Alternatives:__
```sh
git stash save
```

### Спрятать текущие изменения, включая неотслеживаемые файлы
```sh
git stash -u
```

__Alternatives:__
```sh
git stash --include-untracked
```

### Спрятать текущие изменения за исключением файлов в индексе
```sh
git stash --keep-index
```

### Спрятать только часть файла (файлов)
Позволяет выбрать изменения, которые необходимо скрыть
```sh
git stash -p
```

### Показать список спрятанных изменений
```sh
git stash list
```

### Применить последние спрятанные изменения и удалить их из стека
```sh
git stash pop
```

__Alternatives:__
```sh
git stash apply stash@{0} && git stash drop stash@{0}
```

### Применить последние спрятанные изменения без удаления их из стека
```sh
git stash apply <stash@{n}>
```

### Извлечь отдельный файл из stash
```sh
git checkout <stash@{n}> -- <file_path>
```

__Alternatives:__
```sh
git checkout stash@{0} -- <file_path>
```

### Очистить stash
```sh
git stash clear
```

__Alternatives:__
```sh
git stash drop <stash@{n}>
```

## Tags

### Создать новый тег
```sh
git tag <tag-name>
```

### Отправить теги на удаленный репозиторий
```sh
git push --tags
```

### Удалить тег в локальном репозитории
```sh
git tag -d <tag-name>
```

### Удалить тег в удаленном репозитории
```sh
git push origin :refs/tags/<tag-name>
```

__Alternatives:__
```sh
git push origin :<tag-name>
```

```sh
git push -d origin <tag-name>
```

## Разное

### Everyday Git in twenty commands or so
```sh
git help everyday
```

### Show helpful guides that come with Git
```sh
git help -g
```

### Клонировать отдельную ветку
```sh
git clone -b <branch-name> --single-branch https://github.com/user/repo.git
```

### Клонировать репозиторий с указаным количеством коммитов
```sh
git clone https://github.com/user/repo.git --depth 1
```

### Импортировать пакет в репозиторий
```sh
git clone repo.bundle <repo-dir> -b <branch-name>
```

### Alias: git undo
```sh
git config --global alias.undo '!f() { git reset --hard $(git rev-parse --abbrev-ref HEAD)@{${1-1}}; }; f'
```

### Получить данные из удаленного репозитория и сбросить состояние текущей ветки к ним
```sh
git fetch --all && git reset --hard origin/master
```

### Prunes references to remote branches that have been deleted in the remote
```sh
git fetch -p
```

__Alternatives:__
```sh
git remote prune origin
```

### Загрузить пулл-реквест в текущую ветку по ID
```sh
git fetch origin pull/<id>/head:<branch-name>
```

__Alternatives:__
```sh
git pull origin pull/<id>/head:<branch-name>
```

### Specific fetch reference
```sh
git fetch origin master:refs/remotes/origin/mymaster
```

### List of all files till a commit
```sh
git ls-tree --name-only -r <commit-ish>
```

### Git reset first commit
```sh
git update-ref -d HEAD
```

### Показать самый последний тег на текущей ветке
```sh
git describe --tags --abbrev=0
```

### Revert: отменить коммит с помощью нового коммита
```sh
git revert <commit-ish>
```

### Revert: отменить слияние (merge) с помощью нового коммита
```sh
git revert -m 1 <commit-ish>
```

### Reset: Отменить коммиты (сброс к указанному коммиту)
```sh
git reset <commit-ish>
```

### Показать историю коммитов только для текущей ветки
```sh
git cherry -v master
```

### Показать список удаленных репозиториев
```sh
git remote
```

__Alternatives:__
```sh
git remote show
```

### Изменить URL удаленного репозитория
```sh
git remote set-url origin <URL>
```

### List references in a remote repository
```sh
git ls-remote git://git.kernel.org/pub/scm/git/git.git
```

### Добавить удаленный репозиторий
```sh
git remote add <remote-nickname> <remote-url>
```

### Автокомплит Git-команд в bash
```sh
curl http://git.io/vfhol > ~/.git-completion.bash && echo '[ -f ~/.git-completion.bash ] && . ~/.git-completion.bash' >> ~/.bashrc
```

### Перенести коммиты из одной ветки в другую с помощью cherry-pick
```sh
git checkout <branch-name> && git cherry-pick <commit-ish>
```

### Undo local changes with the last content in head
```sh
git checkout -- <file_name>
```

### Показать все отслеживаемы файлы
```sh
git ls-files -t
```

### Показать все неотслеживаемые файлы
```sh
git ls-files --others
```

### Показать все игнорируемые файлы
```sh
git ls-files --others -i --exclude-standard
```

### Create new working tree from a repository (git 2.5)
```sh
git worktree add -b <branch-name> <path> <start-point>
```

### Create new working tree from HEAD state
```sh
git worktree add --detach <path> HEAD
```

### Не отслеживать файл (без удаления)
Удаляет файл из git, сохраняя при этом его локальную копию
```sh
git rm --cached <file_path>
```

__Alternatives:__
```sh
git rm --cached -r <directory_path>
```

### Обновить все субмодули
```sh
git submodule foreach git pull
```

__Alternatives:__
```sh
git submodule update --init --recursive
```

```sh
git submodule update --remote
```

### Показать коммиты текущей ветки, которые будут слиты в мастер
```sh
git cherry -v master
```

__Alternatives:__
```sh
git cherry -v master <branch-to-be-merged>
```

### Retrieve the commit hash of the initial revision
```sh
 git rev-list --reverse HEAD | head -1
```

__Alternatives:__
```sh
git rev-list --max-parents=0 HEAD
```

```sh
git log --pretty=oneline | tail -1 | cut -c 1-40
```

```sh
git log --pretty=oneline --reverse | head -1 | cut -c 1-40
```

### Deploying git tracked subfolder to gh-pages
```sh
git subtree push --prefix subfolder_name origin gh-pages
```

### Adding a project to repo using subtree
```sh
git subtree add --prefix=<directory_name>/<project_name> --squash git@github.com:<username>/<project_name>.git master
```

### Get latest changes in your repo for a linked project using subtree
```sh
git subtree pull --prefix=<directory_name>/<project_name> --squash git@github.com:<username>/<project_name>.git master
```

### Экспортировать ветку в файл (создать пакет)
```sh
git bundle create <file> <branch-name>
```

### Архивировать ветку master
```sh
git archive master --format=zip --output=master.zip
```

### Ignore one file on commit (e.g. Changelog)
```sh
git update-index --assume-unchanged Changelog; git commit -a; git update-index --no-assume-unchanged Changelog
```

### Спрятать изменения перед выполнением перемещения
```sh
git rebase --autostash
```

### Show changes using common diff tools
```sh
git difftool -t <commit1> <commit2> <path>
```

### Don’t consider changes for tracked file
```sh
git update-index --assume-unchanged <file_name>
```

### Undo assume-unchanged
```sh
git update-index --no-assume-unchanged <file_name>
```

### Восстановить удаленный файл
```sh
git checkout <deleting_commit>^ -- <file_path>
```

### Restore file to a specific commit-hash
```sh
git checkout <commit-ish> -- <file_path>
```

### Check if the change was a part of a release
```sh
git name-rev --name-only <SHA-1>
```

### Squash fixup commits normal commits
```sh
git rebase -i --autosquash
```

### Показать список игнорируемых файлов
```sh
git check-ignore *
```

### Статус игнорируемых файлов
```sh
git status --ignored
```

### Count unpacked number of objects and their disk consumption
```sh
git count-objects --human-readable
```

### Prune all unreachable objects from the object database
```sh
git gc --prune=now --aggressive
```

### Instantly browse your working repository in gitweb
```sh
git instaweb [--local] [--httpd=<httpd>] [--port=<port>] [--browser=<browser>]
```

### Получить файл из другой ветки
```sh
git show <branch_name>:<file_name>
```

### Изменить коммиты в интерактивном режиме
```sh
git rebase --interactive HEAD~2
```

### Поиск коммита с багом при помощи бинарного поиска
```sh
git bisect start                    # Search start 
git bisect bad                      # Set point to bad commit 
git bisect good v2.6.13-rc2         # Set point to good commit|tag 
git bisect bad                      # Say current state is bad 
git bisect good                     # Say current state is good 
git bisect reset                    # Finish search 

```

### Показать все локальные ветки, отсортировав их по дате изменения
```sh
git for-each-ref --sort=-committerdate --format='%(refname:short)' refs/heads/
```

### Find lines matching the pattern (regex or string) in tracked files
```sh
git grep --heading --line-number 'foo bar'
```

### Количество коммитов в ветке
```sh
git rev-list --count <branch-name>
```

### Добавить заметку
```sh
git notes add -m 'Note on the previous commit....'
```

### Apply commit from another repository
```sh
git --git-dir=<source-dir>/.git format-patch -k -1 --stdout <SHA1> | git am -3 -k
```

### Найти общего предка двух веток
```sh
diff -u <(git rev-list --first-parent BranchA) <(git rev-list --first-parent BranchB) | sed -ne 's/^ //p' | head -1
```

### Показывает автора, время и хеш-коммита последнего изменения для каждой строки файла
Также можно выполнить команду с флагом `-s` для того, чтобы показывать автора и время коммита
```sh
git blame <file-name>
```

### Показывает автора, время и хеш-коммита последнего изменения для указанного диапазона строк
```sh
git blame <file-name> -L <start>,<end>
```

### Show a Git logical variable
```sh
git var -l | <variable>
```

### Preformatted patch file
```sh
git format-patch -M upstream..topic
```

### Показать название репозитория
```sh
git rev-parse --show-toplevel
```

### Generates a summary of pending changes
```sh
git request-pull v1.0 https://git.ko.xz/project master:for-linus
```

### Сделать резервную копию неотслеживаемых файлов
```sh
git ls-files --others -i --exclude-standard | xargs zip untracked.zip
```
<!-- Don’t remove or change the comment below – that can break automatic updates. More info at <http://npm.im/doxie.inject>. -->
<!-- @doxie.inject end -->
