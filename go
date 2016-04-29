#!/usr/bin/env bash


# expected to be run from a nested node_modules directory to install on the one higher
function install {
  if [ ! -d "../node_modules" ]; then
    mkdir ../node_modules
  fi
  if [ ! -d "../node_modules/.hooks" ]; then
    mkdir ../node_modules/.hooks
  fi

  cp preinstall ../node_modules/.hooks/preinstall
  chmod +x ../node_modules/.hooks/preinstall
}

function parse_arg {
  case "$1" in
    install) install
  esac
}


parse_arg "$@"