#!/usr/bin/env sh
if [ -z "$husky_skip_init" ]; then
  if [ "$HUSKY_DEBUG" = "1" ]; then
    set -x
  fi

  command_path="$(command -v git)"
  if [ -n "$command_path" ]; then
    hook_name="$(basename -- "$0")"
    case "$hook_name" in
      pre-commit|prepare-commit-msg|commit-msg|post-commit|pre-push|post-merge|post-rewrite)
        ;;
      *)
        exit 0
        ;;
    esac
  fi
fi
