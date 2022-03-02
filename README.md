# chrome_extension_maker_tools

## このツールの目的

Chrome拡張機能を作成するにあたってバージョンアップ作業や、ZIPファイルへの圧縮、アイコンの用意など、
手間になる作業がいくつかあったため、作成効率アップのためにこの自作パッケージを作成しました！

## 使用方法

extensions ディレクトリ配下のChrome拡張機能用ファイルに対して以下の機能が利用できます！

    - ディレクトリ直下のManifest.jsonを参照し、バージョンアップ作業をコマンドで実行
    - 拡張機能ファイルのzip圧縮
    - アイコンの自動リサイズ機能（ファイル名： extensions/icons/icon.png を準備要！ ）

- インストール
    ```
    yarn add https://github.com/cti1650/chrome_extension_maker_tools
    ```

- アップデート
    ```
    yarn upgrade chrome_extension_maker_tools
    ```

- Manifest File Version管理

    - major アップデート
        ```
        yarn ext-major
        ```

    - minor アップデート
        ```
        yarn ext-minor
        ```

    - patch アップデート
        ```
        yarn ext-patch
        ```

    - release
        ```
        yarn ext-patch
        ```
    - Manifest File 参照
        ```
        yarn ext-manifest

- オプションツール

    - ICON 画像サイズ変更
        ```
        yarn ext-icon
        ```

    - ICON 透過処理＋画像サイズ変更
        ```
        yarn ext-icon-transparent
        ```

    - スクリーンショット 画像サイズ変更
        ```
        yarn ext-screenshot
        ```

    - 拡張機能 ZIP圧縮
        ```
        yarn ext-zip
        ```

- [TypeScriptで自分用のライブラリを作ってローカル/GitHubからnpm installする - Qiita](https://qiita.com/asylum/items/9a4a60aa5cf54bc8acab)  

- [本当にやさしいnpmライブラリ開発入門 - Qiita](https://qiita.com/saltyshiomix/items/0306e17cde8f2475f193)  

- [自作パッケージの実行ファイルをnpm installした際にnode_modules/.bin/に登録する - Qiita](https://qiita.com/103ma2/items/02709e55bf7cd99588c1)  

