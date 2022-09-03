# はじめに
JavaScriptからRustをコンパイルして作ったWebAssemblyのプログラム(関数)にJSONを渡して、その関数がJSONを返して
JavaScriptで受け取るところまでを実装した。

# 事前準備
## Node.jsのインストール
次のリンクを参照

https://github.com/nvm-sh/nvm/

## Rustのインストール
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

## wasm-packのインストール
curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh


# インストール方法
git clone https://github.com/toma-itc/sample_code.git

cd sample_code/sample-rust-wasm

npm i --legacy-peer-deps


# 起動方法
## ローカル端末からアクセスする場合
npm run-script dev

http://localhost:33857/

## リモートサーバで起動して、そこにアクセスする場合
webpack.config.jsのdevServerの

host: "0.0.0.0",

の部分のコメントアウトを外してから以下を実行する。

npm run-script dev-all

http://IPアドレス:33857/


# 想定される出力結果
```
Hello World.
{"bar":{"test1":"test2"}}
{"bar":{"testA":"testB"}}
{
    "bar": {
        "testA": "testB"
    }
}
```
