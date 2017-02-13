# Git Tips

Часто используемые трюки и советы при работе с Git.

Хотите дополнить список? Ознакомьтесь с [contributing.md](contributing.md)

[English](http://git.io/git-tips) | [中文](https://github.com/521xueweihan/git-tips) | [Русский](https://github.com/Imangazaliev/git-tips)

### Tools:

* [git-tip](https://www.npmjs.com/package/git-tip) - консольная утилита, облегчающая использование всех этих команд. Docker-контейнер можно найти [здесь](https://github.com/djoudi5/docker-git-tip)

**P.S:** Все эти команды были проверены в `git version 2.7.4 (Apple Git-66)`

## Содержание

<!-- @doxie.inject start toc -->
<!-- Don’t remove or change the comment above – that can break automatic updates. -->
* [Everyday Git in twenty commands or so](#everyday-git-in-twenty-commands-or-so)
* [Show helpful guides that come with Git](#show-helpful-guides-that-come-with-git)
* [Получить данные из удаленного репозитория и сбросить состояние текущей ветки к ним](#получить-данные-из-удаленного-репозитория-и-сбросить-состояние-текущей-ветки-к-ним)
* [List of all files till a commit](#list-of-all-files-till-a-commit)
* [Git reset first commit](#git-reset-first-commit)
* [Показать список конфликтующих файлов](#показать-список-конфликтующих-файлов)
* [Список всех файлов, которые были изменены в коммите](#список-всех-файлов-которые-были-изменены-в-коммите)
* [Показать изменения с момента последнего коммита](#показать-изменения-с-момента-последнего-коммита)
* [Изменения в файлах, которые находятся в индексе](#изменения-в-файлах-которые-находятся-в-индексе)
* [Показать все изменения (для файлов которых нет в индексе и которые уже там)](#показать-все-изменения-для-файлов-которых-нет-в-индексе-и-которые-уже-там)
* [Показать список веток, которые уже слиты с веткой master](#показать-список-веток-которые-уже-слиты-с-веткой-master)
* [Быстрое переключение на предыдущую ветку](#быстрое-переключение-на-предыдущую-ветку)
* [Удалить ветки, которые уже слиты с master](#удалить-ветки-которые-уже-слиты-с-master)
* [Показать все ветки (в том числе и удаленные ветки), а так же последний коммит в них](#показать-все-ветки-в-том-числе-и-удаленные-ветки-а-так-же-последний-коммит-в-них)
* [Track upstream branch](#track-upstream-branch)
* [Удалить локальную ветку](#удалить-локальную-ветку)
* [Удалить ветку в удаленном репозитории](#удалить-ветку-в-удаленном-репозитории)
* [Удалить тег в локальном репозитории](#удалить-тег-в-локальном-репозитории)
* [Удалить тег в удаленном репозитории](#удалить-тег-в-удаленном-репозитории)
* [Undo local changes with the last content in head](#undo-local-changes-with-the-last-content-in-head)
* [Revert: отменить коммит с помощью нового коммита](#revert-отменить-коммит-с-помощью-нового-коммита)
* [Reset: Discard commits, advised for private branch](#reset-discard-commits-advised-for-private-branch)
* [Изменить сообщение последнего коммита](#изменить-сообщение-последнего-коммита)
* [Показать историю коммитов только для текущей ветки](#показать-историю-коммитов-только-для-текущей-ветки)
* [Исправить имя автора последнего коммита](#исправить-имя-автора-последнего-коммита)
* [Reset author, after author has been changed in the global config](#reset-author-after-author-has-been-changed-in-the-global-config)
* [Изменить URL удаленного репозитория](#изменить-url-удаленного-репозитория)
* [Показать список удаленных репозиториев](#показать-список-удаленных-репозиториев)
* [Список локальных и удаленных веток](#список-локальных-и-удаленных-веток)
* [Список веток в удаленном репозитории](#список-веток-в-удаленном-репозитории)
* [Добавить в индекс часть файла](#добавить-в-индекс-часть-файла)
* [Автокосплит Git-команд в bash](#автокосплит-git-команд-в-bash)
* [Изменения за указанный промежуток времени](#изменения-за-указанный-промежуток-времени)
* [Показать все коммиты с момента отделения от ветки master](#показать-все-коммиты-с-момента-отделения-от-ветки-master)
* [Перенести коммиты из одной ветки в другую с помощью cherry-pick](#перенести-коммиты-из-одной-ветки-в-другую-с-помощью-cherry-pick)
* [Найти ветки, которые содержат коммит с указанным хешем](#найти-ветки-которые-содержат-коммит-с-указанным-хешем)
* [Псевдонимы (alias) для команд Git](#псевдонимы-alias-для-команд-git)
* [Спрятать текущие изменения для отслеживаемых файлов](#спрятать-текущие-изменения-для-отслеживаемых-файлов)
* [Спрятать текущие изменения, включая неотслеживаемые файлы](#спрятать-текущие-изменения-включая-неотслеживаемые-файлы)
* [Показать список спрятанных изменений](#показать-список-спрятанных-изменений)
* [Применить последние спрятанные изменения без удаления их из стека](#применить-последние-спрятанные-изменения-без-удаления-их-из-стека)
* [Применить последние спрятанные изменения и удалить их из стека](#применить-последние-спрятанные-изменения-и-удалить-их-из-стека)
* [Очистить stash](#очистить-stash)
* [Извлечь отдельный файл из stash](#извлечь-отдельный-файл-из-stash)
* [Показать все отслеживаемы файлы](#показать-все-отслеживаемы-файлы)
* [Показать все неотслеживаемые файлы](#показать-все-неотслеживаемые-файлы)
* [Показать все игнорируемые файлы](#показать-все-игнорируемые-файлы)
* [Create new working tree from a repository (git 2.5)](#create-new-working-tree-from-a-repository-git-25)
* [Create new working tree from HEAD state](#create-new-working-tree-from-head-state)
* [Не отслеживать файлы (без удаления)](#не-отслеживать-файлы-без-удаления)
* [Before deleting untracked files/directory, do a dry run to get the list of these files/directories](#before-deleting-untracked-filesdirectory-do-a-dry-run-to-get-the-list-of-these-filesdirectories)
* [Принудительно удалить неотслеживаемые файлы](#принудительно-удалить-неотслеживаемые-файлы)
* [Принудительно удалить неотслеживаемую директорию](#принудительно-удалить-неотслеживаемую-директорию)
* [Обновить все субмодули](#обновить-все-субмодули)
* [Показать коммиты текущей ветки, которые будут слиты в мастер](#показать-коммиты-текущей-ветки-которые-будут-слиты-в-мастер)
* [Переименовать ветку](#переименовать-ветку)
* [Переместить ветку 'feature' на 'master' и слить ее в мастер](#переместить-ветку-feature-на-master-и-слить-ее-в-мастер)
* [Архивировать ветку master](#архивировать-ветку-master)
* [Изменить предыдущий коммит без изменения сообщения к коммиту](#изменить-предыдущий-коммит-без-изменения-сообщения-к-коммиту)
* [Prunes references to remote branches that have been deleted in the remote](#prunes-references-to-remote-branches-that-have-been-deleted-in-the-remote)
* [Retrieve the commit hash of the initial revision](#retrieve-the-commit-hash-of-the-initial-revision)
* [Показать дерево тегов (версий)](#показать-дерево-тегов-версий)
* [Deploying git tracked subfolder to gh-pages](#deploying-git-tracked-subfolder-to-gh-pages)
* [Adding a project to repo using subtree](#adding-a-project-to-repo-using-subtree)
* [Get latest changes in your repo for a linked project using subtree](#get-latest-changes-in-your-repo-for-a-linked-project-using-subtree)
* [Эспортировать ветку в файл (создать пакет)](#эспортировать-ветку-в-файл-создать-пакет)
* [Импортировать пакет в репозиторий](#импортировать-пакет-в-репозиторий)
* [Показать название текущей ветки](#показать-название-текущей-ветки)
* [Ignore one file on commit (e.g. Changelog)](#ignore-one-file-on-commit-eg-changelog)
* [Спрятать изменения перед выполнением перемещения](#спрятать-изменения-перед-выполнением-перемещения)
* [Загрузить пулл-реквест в текущую ветку по ID](#загрузить-пулл-реквест-в-текущую-ветку-по-id)
* [Показать самый последний тег на текущей ветке](#показать-самый-последний-тег-на-текущей-ветке)
* [Показывать изменения в одну строку](#показывать-изменения-в-одну-строку)
* [Show changes using common diff tools](#show-changes-using-common-diff-tools)
* [Don’t consider changes for tracked file](#dont-consider-changes-for-tracked-file)
* [Undo assume-unchanged](#undo-assume-unchanged)
* [Удалить все файлы, которые находятся в `.gitignore`](#удалить-все-файлы-которые-находятся-в-gitignore)
* [Восстановить удаленный файл](#восстановить-удаленный-файл)
* [Restore file to a specific commit-hash](#restore-file-to-a-specific-commit-hash)
* [Всегда выполнять перемещение вместо слияния при получении изменений из удаленного репозитория](#всегда-выполнять-перемещение-вместо-слияния-при-получении-изменений-из-удаленного-репозитория)
* [Показать конфиг и все псевдонимы (alias)](#показать-конфиг-и-все-псевдонимы-alias)
* [Сделать git чувствительным к регистру](#сделать-git-чувствительным-к-регистру)
* [Изменить текстовый редактор](#изменить-текстовый-редактор)
* [Включить автоматическое исправление опечаток](#включить-автоматическое-исправление-опечаток)
* [Check if the change was a part of a release](#check-if-the-change-was-a-part-of-a-release)
* [Dry run (any command that supports dry-run flag should do)](#dry-run-any-command-that-supports-dry-run-flag-should-do)
* [Отметить коммит как исправление к указанному коммиту](#отметить-коммит-как-исправление-к-указанному-коммиту)
* [Squash fixup commits normal commits](#squash-fixup-commits-normal-commits)
* [Skip staging area during commit](#skip-staging-area-during-commit)
* [Интерактивное добавление файлов в индекс](#интерактивное-добавление-файлов-в-индекс)
* [Показать список игнорируемых файлов](#показать-список-игнорируемых-файлов)
* [Статус игнорируемых файлов](#статус-игнорируемых-файлов)
* [Коммиты в ветке Branch1, которых нет в Branch2](#коммиты-в-ветке-branch1-которых-нет-в-branch2)
* [Reuse recorded resolution, record and reuse previous conflicts resolutions](#reuse-recorded-resolution-record-and-reuse-previous-conflicts-resolutions)
* [Открыть все конфликтующие файлы в редакторе](#открыть-все-конфликтующие-файлы-в-редакторе)
* [Count unpacked number of objects and their disk consumption](#count-unpacked-number-of-objects-and-their-disk-consumption)
* [Prune all unreachable objects from the object database](#prune-all-unreachable-objects-from-the-object-database)
* [Instantly browse your working repository in gitweb](#instantly-browse-your-working-repository-in-gitweb)
* [Показать GPG-сигнатуру в истории коммитов](#показать-gpg-сигнатуру-в-истории-коммитов)
* [Удалить запись из глобального конфига](#удалить-запись-из-глобального-конфига)
* [Создать новую ветку без родительской ветки](#создать-новую-ветку-без-родительской-ветки)
* [Получить файл из другой ветки](#получить-файл-из-другой-ветки)
* [List only the root and merge commits](#list-only-the-root-and-merge-commits)
* [Изменить коммиты в интерактивном режиме](#изменить-коммиты-в-интерактивном-режиме)
* [Показать все ветки, не слитые в master](#показать-все-ветки-не-слитые-в-master)
* [Поиск коммита с багом при помощи бинарного поиска](#поиск-коммита-с-багом-при-помощи-бинарного-поиска)
* [Сделать коммит, обойдя хуки pre-commit и commit-msg](#сделать-коммит-обойдя-хуки-pre-commit-и-commit-msg)
* [Показать коммиты и изменения в них для определенного файла (даже если он был переименован)](#показать-коммиты-и-изменения-в-них-для-определенного-файла-даже-если-он-был-переименован)
* [Клонировать отдельную ветку](#клонировать-отдельную-ветку)
* [Создать новую ветку и переключиться на нее](#создать-новую-ветку-и-переключиться-на-нее)
* [Игнорировать изменения прав доступа на файлы при коммите](#игнорировать-изменения-прав-доступа-на-файлы-при-коммите)
* [Отключить цветной вывод Git](#отключить-цветной-вывод-git)
* [Specific color settings](#specific-color-settings)
* [Показать все локальные ветки, отсортировав их по дате изменения](#показать-все-локальные-ветки-отсортировав-их-по-дате-изменения)
* [Find lines matching the pattern (regex or string) in tracked files](#find-lines-matching-the-pattern-regex-or-string-in-tracked-files)
* [Склонировать репозиторий с указаным количеством коммитов](#склонировать-репозиторий-с-указаным-количеством-коммитов)
* [Search Commit log across all branches for given text](#search-commit-log-across-all-branches-for-given-text)
* [Get first commit in a branch (from master)](#get-first-commit-in-a-branch-from-master)
* [Удалить добавленный файл из индекса](#удалить-добавленный-файл-из-индекса)
* [Отправить коммиты в удаленный репозиторий, перезаписав историю (force push)](#отправить-коммиты-в-удаленный-репозиторий-перезаписав-историю-force-push)
* [Добавить удаленный репозиторий](#добавить-удаленный-репозиторий)
* [Показывает автора, время и хеш-коммита последнего изменения для каждой строки файла](#показывает-автора-время-и-хеш-коммита-последнего-изменения-для-каждой-строки-файла)
* [Показать историю коммитов, сгрупировав их по имени автора](#показать-историю-коммитов-сгрупировав-их-по-имени-автора)
* [Forced push but still ensure you don't overwrite other's work](#forced-push-but-still-ensure-you-dont-overwrite-others-work)
* [Показать количество строк, которое добавил/удалил пользователь](#показать-количество-строк-которое-добавилудалил-пользователь)
* [Revert: Reverting an entire merge](#revert-reverting-an-entire-merge)
* [Количество коммитов в ветке](#количество-коммитов-в-ветке)
* [Alias: git undo](#alias-git-undo)
* [Добавить заметку](#добавить-заметку)
* [Показать все заметки (git notes)](#показать-все-заметки-git-notes)
* [Apply commit from another repository](#apply-commit-from-another-repository)
* [Specific fetch reference](#specific-fetch-reference)
* [Найти общего предка двух веток](#найти-общего-предка-двух-веток)
* [Показать незапушенные коммиты](#показать-незапушенные-коммиты)
* [Изменить (git config) локальный/глобальный конфиг git (git config)](#изменить-git-config-локальныйглобальный-конфиг-git-git-config)
* [Показывает автора, время и хеш-коммита последнего изменения для указанного диапазона строк](#показывает-автора-время-и-хеш-коммита-последнего-изменения-для-указанного-диапазона-строк)
* [Show a Git logical variable](#show-a-git-logical-variable)
* [Preformatted patch file](#preformatted-patch-file)
* [Показать название репозитория](#показать-название-репозитория)
* [Показать логи за определенный период (от-до)](#показать-логи-за-определенный-период-от-до)
* [Показать историю коммитов, исключив коммиты указанного автора](#показать-историю-коммитов-исключив-коммиты-указанного-автора)
* [Generates a summary of pending changes](#generates-a-summary-of-pending-changes)
* [List references in a remote repository](#list-references-in-a-remote-repository)
* [Сделать резервную копию неотслеживаемых файлов](#сделать-резервную-копию-неотслеживаемых-файлов)

<!-- Don’t remove or change the comment below – that can break automatic updates. More info at <http://npm.im/doxie.inject>. -->
<!-- @doxie.inject end toc -->


<!-- @doxie.inject start -->
<!-- Don’t remove or change the comment above – that can break automatic updates. -->
## Everyday Git in twenty commands or so
```sh
git help everyday
```

## Show helpful guides that come with Git
```sh
git help -g
```

## Получить данные из удаленного репозитория и сбросить состояние текущей ветки к ним
```sh
git fetch --all && git reset --hard origin/master
```

## List of all files till a commit
```sh
git ls-tree --name-only -r <commit-ish>
```

## Git reset first commit
```sh
git update-ref -d HEAD
```

## Показать список конфликтующих файлов
```sh
git diff --name-only --diff-filter=U
```

## Список всех файлов, которые были изменены в коммите
```sh
git diff-tree --no-commit-id --name-only -r <commit-ish>
```

## Показать изменения с момента последнего коммита
```sh
git diff
```

## Изменения в файлах, которые находятся в индексе
```sh
git diff --cached
```

__Alternatives:__
```sh
git diff --staged
```

## Показать все изменения (для файлов которых нет в индексе и которые уже там)
```sh
git diff HEAD
```

## Показать список веток, которые уже слиты с веткой master
```sh
git branch --merged master
```

## Быстрое переключение на предыдущую ветку
```sh
git checkout -
```

## Удалить ветки, которые уже слиты с master
```sh
git branch --merged master | grep -v '^\*' | xargs -n 1 git branch -d
```

__Alternatives:__
```sh
git branch --merged master | grep -v '^\*\|  master' | xargs -n 1 git branch -d # will not delete master if master is not checked out
```

## Показать все ветки (в том числе и удаленные ветки), а так же последний коммит в них
```sh
git branch -vv
```

## Track upstream branch
```sh
git branch -u origin/mybranch
```

## Удалить локальную ветку
```sh
git branch -d <local_branchname>
```

## Удалить ветку в удаленном репозитории
```sh
git push origin --delete <remote_branchname>
```

__Alternatives:__
```sh
git push origin :<remote_branchname>
```

## Удалить тег в локальном репозитории
```sh
git tag -d <tag-name>
```

## Удалить тег в удаленном репозитории
```sh
git push origin :refs/tags/<tag-name>
```

## Undo local changes with the last content in head
```sh
git checkout -- <file_name>
```

## Revert: отменить коммит с помощью нового коммита
```sh
git revert <commit-ish>
```

## Reset: Discard commits, advised for private branch
```sh
git reset <commit-ish>
```

## Изменить сообщение последнего коммита
```sh
git commit -v --amend
```

## Показать историю коммитов только для текущей ветки
```sh
git cherry -v master
```

## Исправить имя автора последнего коммита
```sh
git commit --amend --author='Author Name <email@address.com>'
```

## Reset author, after author has been changed in the global config
```sh
git commit --amend --reset-author --no-edit
```

## Изменить URL удаленного репозитория
```sh
git remote set-url origin <URL>
```

## Показать список удаленных репозиториев
```sh
git remote
```

__Alternatives:__
```sh
git remote show
```

## Список локальных и удаленных веток
```sh
git branch -a
```

## Список веток в удаленном репозитории
```sh
git branch -r
```

## Добавить в индекс часть файла
```sh
git add -p
```

## Автокосплит Git-команд в bash
```sh
curl http://git.io/vfhol > ~/.git-completion.bash && echo '[ -f ~/.git-completion.bash ] && . ~/.git-completion.bash' >> ~/.bashrc
```

## Изменения за указанный промежуток времени
```sh
git log --no-merges --raw --since='2 weeks ago'
```

__Alternatives:__
```sh
git whatchanged --since='2 weeks ago'
```

## Показать все коммиты с момента отделения от ветки master
```sh
git log --no-merges --stat --reverse master..
```

## Перенести коммиты из одной ветки в другую с помощью cherry-pick
```sh
git checkout <branch-name> && git cherry-pick <commit-ish>
```

## Найти ветки, которые содержат коммит с указанным хешем
```sh
git branch -a --contains <commit-ish>
```

__Alternatives:__
```sh
git branch --contains <commit-ish>
```

## Псевдонимы (alias) для команд Git
```sh
git config --global alias.<handle> <command> 
git config --global alias.st status
```

## Спрятать текущие изменения для отслеживаемых файлов
```sh
git stash
```

__Alternatives:__
```sh
git stash save
```

## Спрятать текущие изменения, включая неотслеживаемые файлы
```sh
git stash save -u
```

__Alternatives:__
```sh
git stash save --include-untracked
```

## Показать список спрятанных изменений
```sh
git stash list
```

## Применить последние спрятанные изменения без удаления их из стека
```sh
git stash apply <stash@{n}>
```

## Применить последние спрятанные изменения и удалить их из стека
```sh
git stash pop
```

__Alternatives:__
```sh
git stash apply stash@{0} && git stash drop stash@{0}
```

## Очистить stash
```sh
git stash clear
```

__Alternatives:__
```sh
git stash drop <stash@{n}>
```

## Извлечь отдельный файл из stash
```sh
git checkout <stash@{n}> -- <file_path>
```

__Alternatives:__
```sh
git checkout stash@{0} -- <file_path>
```

## Показать все отслеживаемы файлы
```sh
git ls-files -t
```

## Показать все неотслеживаемые файлы
```sh
git ls-files --others
```

## Показать все игнорируемые файлы
```sh
git ls-files --others -i --exclude-standard
```

## Create new working tree from a repository (git 2.5)
```sh
git worktree add -b <branch-name> <path> <start-point>
```

## Create new working tree from HEAD state
```sh
git worktree add --detach <path> HEAD
```

## Не отслеживать файлы (без удаления)
```sh
git rm --cached <file_path>
```

__Alternatives:__
```sh
git rm --cached -r <directory_path>
```

## Before deleting untracked files/directory, do a dry run to get the list of these files/directories
```sh
git clean -n
```

## Принудительно удалить неотслеживаемые файлы
```sh
git clean -f
```

## Принудительно удалить неотслеживаемую директорию
```sh
git clean -f -d
```

__Alternatives:__
```sh
git clean -df
```

## Обновить все субмодули
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

## Показать коммиты текущей ветки, которые будут слиты в мастер
```sh
git cherry -v master
```

__Alternatives:__
```sh
git cherry -v master <branch-to-be-merged>
```

## Переименовать ветку
```sh
git branch -m <new-branch-name>
```

__Alternatives:__
```sh
git branch -m [<old-branch-name>] <new-branch-name>
```

## Переместить ветку 'feature' на 'master' и слить ее в мастер
```sh
git rebase master feature && git checkout master && git merge -
```

## Архивировать ветку master
```sh
git archive master --format=zip --output=master.zip
```

## Изменить предыдущий коммит без изменения сообщения к коммиту
```sh
git add --all && git commit --amend --no-edit
```

## Prunes references to remote branches that have been deleted in the remote
```sh
git fetch -p
```

__Alternatives:__
```sh
git remote prune origin
```

## Retrieve the commit hash of the initial revision
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

## Показать дерево тегов (версий)
```sh
git log --pretty=oneline --graph --decorate --all
```

__Alternatives:__
```sh
gitk --all
```

## Deploying git tracked subfolder to gh-pages
```sh
git subtree push --prefix subfolder_name origin gh-pages
```

## Adding a project to repo using subtree
```sh
git subtree add --prefix=<directory_name>/<project_name> --squash git@github.com:<username>/<project_name>.git master
```

## Get latest changes in your repo for a linked project using subtree
```sh
git subtree pull --prefix=<directory_name>/<project_name> --squash git@github.com:<username>/<project_name>.git master
```

## Эспортировать ветку в файл (создать пакет)
```sh
git bundle create <file> <branch-name>
```

## Импортировать пакет в репозиторий
```sh
git clone repo.bundle <repo-dir> -b <branch-name>
```

## Показать название текущей ветки
```sh
git rev-parse --abbrev-ref HEAD
```

## Ignore one file on commit (e.g. Changelog)
```sh
git update-index --assume-unchanged Changelog; git commit -a; git update-index --no-assume-unchanged Changelog
```

## Спрятать изменения перед выполнением перемещения
```sh
git rebase --autostash
```

## Загрузить пулл-реквест в текущую ветку по ID
```sh
git fetch origin pull/<id>/head:<branch-name>
```

__Alternatives:__
```sh
git pull origin pull/<id>/head:<branch-name>
```

## Показать самый последний тег на текущей ветке
```sh
git describe --tags --abbrev=0
```

## Показывать изменения в одну строку
```sh
git diff --word-diff
```

## Show changes using common diff tools
```sh
git difftool -t <commit1> <commit2> <path>
```

## Don’t consider changes for tracked file
```sh
git update-index --assume-unchanged <file_name>
```

## Undo assume-unchanged
```sh
git update-index --no-assume-unchanged <file_name>
```

## Удалить все файлы, которые находятся в `.gitignore`
```sh
git clean -X -f
```

## Восстановить удаленный файл
```sh
git checkout <deleting_commit>^ -- <file_path>
```

## Restore file to a specific commit-hash
```sh
git checkout <commit-ish> -- <file_path>
```

## Всегда выполнять перемещение вместо слияния при получении изменений из удаленного репозитория
```sh
git config --global pull.rebase true
```

__Alternatives:__
```sh
#git < 1.7.9
git config --global branch.autosetuprebase always
```

## Показать конфиг и все псевдонимы (alias)
```sh
git config --list
```

## Сделать git чувствительным к регистру
```sh
git config --global core.ignorecase false
```

## Изменить текстовый редактор
```sh
git config --global core.editor '$EDITOR'
```

## Включить автоматическое исправление опечаток
```sh
git config --global help.autocorrect 1
```

## Check if the change was a part of a release
```sh
git name-rev --name-only <SHA-1>
```

## Dry run (any command that supports dry-run flag should do)
```sh
git clean -fd --dry-run
```

## Отметить коммит как исправление к указанному коммиту
```sh
git commit --fixup <SHA-1>
```

## Squash fixup commits normal commits
```sh
git rebase -i --autosquash
```

## Skip staging area during commit
```sh
git commit --only <file_path>
```

## Интерактивное добавление файлов в индекс
```sh
git add -i
```

## Показать список игнорируемых файлов
```sh
git check-ignore *
```

## Статус игнорируемых файлов
```sh
git status --ignored
```

## Коммиты в ветке Branch1, которых нет в Branch2
```sh
git log Branch1 ^Branch2
```

## Reuse recorded resolution, record and reuse previous conflicts resolutions
```sh
git config --global rerere.enabled 1
```

## Открыть все конфликтующие файлы в редакторе
```sh
git diff --name-only | uniq | xargs $EDITOR
```

## Count unpacked number of objects and their disk consumption
```sh
git count-objects --human-readable
```

## Prune all unreachable objects from the object database
```sh
git gc --prune=now --aggressive
```

## Instantly browse your working repository in gitweb
```sh
git instaweb [--local] [--httpd=<httpd>] [--port=<port>] [--browser=<browser>]
```

## Показать GPG-сигнатуру в истории коммитов
```sh
git log --show-signature
```

## Удалить запись из глобального конфига
```sh
git config --global --unset <entry-name>
```

## Создать новую ветку без родительской ветки
```sh
git checkout --orphan <branch_name>
```

## Получить файл из другой ветки
```sh
git show <branch_name>:<file_name>
```

## List only the root and merge commits
```sh
git log --first-parent
```

## Изменить коммиты в интерактивном режиме
```sh
git rebase --interactive HEAD~2
```

## Показать все ветки, не слитые в master
```sh
git checkout master && git branch --no-merged
```

## Поиск коммита с багом при помощи бинарного поиска
```sh
git bisect start                    # Search start 
git bisect bad                      # Set point to bad commit 
git bisect good v2.6.13-rc2         # Set point to good commit|tag 
git bisect bad                      # Say current state is bad 
git bisect good                     # Say current state is good 
git bisect reset                    # Finish search 

```

## Сделать коммит, обойдя хуки pre-commit и commit-msg
```sh
git commit --no-verify
```

## Показать коммиты и изменения в них для определенного файла (даже если он был переименован)
```sh
git log --follow -p -- <file_path>
```

## Клонировать отдельную ветку
```sh
git clone -b <branch-name> --single-branch https://github.com/user/repo.git
```

## Создать новую ветку и переключиться на нее
```sh
git checkout -b <branch-name>
```

__Alternatives:__
```sh
git branch <branch-name> && git checkout <branch-name>
```

## Игнорировать изменения прав доступа на файлы при коммите
```sh
git config core.fileMode false
```

## Отключить цветной вывод Git
```sh
git config --global color.ui false
```

## Specific color settings
```sh
git config --global <specific command e.g branch, diff> <true, false or always>
```

## Показать все локальные ветки, отсортировав их по дате изменения
```sh
git for-each-ref --sort=-committerdate --format='%(refname:short)' refs/heads/
```

## Find lines matching the pattern (regex or string) in tracked files
```sh
git grep --heading --line-number 'foo bar'
```

## Склонировать репозиторий с указаным количеством коммитов
```sh
git clone https://github.com/user/repo.git --depth 1
```

## Search Commit log across all branches for given text
```sh
git log --all --grep='<given-text>'
```

## Get first commit in a branch (from master)
```sh
git log master..<branch-name> --oneline | tail -1
```

## Удалить добавленный файл из индекса
```sh
git reset HEAD <file-name>
```

## Отправить коммиты в удаленный репозиторий, перезаписав историю (force push)
```sh
git push -f <remote-name> <branch-name>
```

## Добавить удаленный репозиторий
```sh
git remote add <remote-nickname> <remote-url>
```

## Показывает автора, время и хеш-коммита последнего изменения для каждой строки файла
```sh
git blame <file-name>
```

## Показать историю коммитов, сгрупировав их по имени автора
```sh
git shortlog
```

## Forced push but still ensure you don't overwrite other's work
```sh
git push --force-with-lease <remote-name> <branch-name>
```

## Показать количество строк, которое добавил/удалил пользователь
```sh
git log --author='_Your_Name_Here_' --pretty=tformat: --numstat | gawk '{ add += <!-- @doxie.inject start -->; subs += <!-- @doxie.inject end -->; loc += <!-- @doxie.inject start --> - <!-- @doxie.inject end --> } END { printf "added lines: %s removed lines: %s total lines: %s
", add, subs, loc }' -
```

__Alternatives:__
```sh
git log --author='_Your_Name_Here_' --pretty=tformat: --numstat | awk '{ add += <!-- @doxie.inject start -->; subs += <!-- @doxie.inject end -->; loc += <!-- @doxie.inject start --> - <!-- @doxie.inject end --> } END { printf "added lines: %s, removed lines: %s, total lines: %s
", add, subs, loc }' - # on Mac OSX
```

## Revert: Reverting an entire merge
```sh
git revert -m 1 <commit-ish>
```

## Количество коммитов в ветке
```sh
git rev-list --count <branch-name>
```

## Alias: git undo
```sh
git config --global alias.undo '!f() { git reset --hard $(git rev-parse --abbrev-ref HEAD)@{${1-1}}; }; f'
```

## Добавить заметку
```sh
git notes add -m 'Note on the previous commit....'
```

## Показать все заметки (git notes)
```sh
git log --show-notes='*'
```

## Apply commit from another repository
```sh
git --git-dir=<source-dir>/.git format-patch -k -1 --stdout <SHA1> | git am -3 -k
```

## Specific fetch reference
```sh
git fetch origin master:refs/remotes/origin/mymaster
```

## Найти общего предка двух веток
```sh
diff -u <(git rev-list --first-parent BranchA) <(git rev-list --first-parent BranchB) | sed -ne 's/^ //p' | head -1
```

## Показать незапушенные коммиты
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

## Изменить (git config) локальный/глобальный конфиг git (git config)
```sh
git config [--global] --edit
```

## Показывает автора, время и хеш-коммита последнего изменения для указанного диапазона строк
```sh
git blame -L <start>,<end>
```

## Show a Git logical variable
```sh
git var -l | <variable>
```

## Preformatted patch file
```sh
git format-patch -M upstream..topic
```

## Показать название репозитория
```sh
git rev-parse --show-toplevel
```

## Показать логи за определенный период (от-до)
```sh
git log --since='FEB 1 2017' --until='FEB 14 2017'
```

## Показать историю коммитов, исключив коммиты указанного автора
```sh
git log --perl-regexp --author='^((?!excluded-author-regex).*)

```

## Generates a summary of pending changes
```sh
git request-pull v1.0 https://git.ko.xz/project master:for-linus
```

## List references in a remote repository
```sh
git ls-remote git://git.kernel.org/pub/scm/git/git.git
```

## Сделать резервную копию неотслеживаемых файлов
```sh
git ls-files --others -i --exclude-standard | xargs zip untracked.zip
```

<!-- Don’t remove or change the comment below – that can break automatic updates. More info at <http://npm.im/doxie.inject>. -->
<!-- @doxie.inject end -->
