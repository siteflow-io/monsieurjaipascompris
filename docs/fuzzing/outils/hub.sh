#!/bin/bash
# Fuzzing live MJPC — sauvegarde / comparaison du vrai hub. LECTURE seule ici (GET). La remise en état est dans remettre.py, chemin par chemin.
H=https://mjpc-hub-default-rtdb.europe-west1.firebasedatabase.app
case "$1" in
  photo) d=/tmp/fuzz/photos/$2; mkdir -p $d; for p in site presence; do curl -s "$H/$p.json" -o $d/$p.json; done; md5sum $d/*.json | cut -c1-12,33-; du -sh $d | cut -f1;;
esac
