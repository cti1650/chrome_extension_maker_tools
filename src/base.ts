#!/usr/bin/env node
const argv = process.argv.slice(2);
console.log(JSON.stringify(argv));

const path = require('path');

// プロセス ＝ nodeコマンドを叩いたプロセス
// 実行ファイル ＝ nodeコマンドで叩かれたファイル
// 現在のファイル ＝ 実行中のモジュールのファイル

console.log('プロセスのカレントディレクトリ (1)', path.resolve());
console.log('プロセスのカレントディレクトリ (2)', process.cwd());

console.log('実行ファイルのパス', process.argv[1]);
console.log('実行ファイルの名前', path.basename(process.argv[1]));
console.log('実行ファイルのディレクトリ', path.dirname(process.argv[1]));

console.log('現在のファイルのパス', __filename);
console.log('現在のファイルの名前', path.basename(__filename));
console.log('現在のファイルのディレクトリ', __dirname);

console.log('現在のファイルの一つ上のディレクトリ', path.resolve(__dirname, '..'));
console.log('現在のファイルの二つ上のディレクトリ', path.resolve(__dirname, '..', '..'));
