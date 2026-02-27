# hallucino5105 Portal Site

hallucino5105 のポータルサイトです。Next.js + Tailwind CSS で構築し、GitHub Pages でホスティングしています。

## ページ一覧

| ページ | URL |
|---|---|
| トップ | https://hallucino5105.github.io/ |
| 雀の涙 プライバシーポリシー | https://hallucino5105.github.io/suzume_no_namida/privacy/ |

## 開発環境

```bash
pnpm install
pnpm dev
```

[http://localhost:3900](http://localhost:3900) でローカルプレビューを確認できます。

## ビルド・デプロイ

`main` ブランチへのプッシュで GitHub Actions が自動的にビルド・デプロイします。

```bash
# 静的エクスポートのローカル確認
pnpm export
```

出力先: `out/`

## 技術スタック

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Mantine](https://mantine.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- [Tabler Icons](https://tabler.io/icons)
