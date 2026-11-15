# HTML Works Hub

単体HTMLで動く13作品の**ハブサイト**です。トップページ（ハブ）から検索・カテゴリ絞り込みができ、各作品は全画面ビューワー（`viewer.html`）で開きます。スマホでは「全画面（横）」ボタンで横向き全画面表示になります（PWAマニフェスト付き：`display: fullscreen` / `orientation: landscape`）。

## 公開先（連携）

| 配信先 | URL |
|---|---|
| **Cloudflare Workers（本番）** | https://html-works-site.sc8z-35a.workers.dev/ |
| GitHub Pages（ミラー） | https://sc8z35a-collab.github.io/html-works-site/ |
| GitHub（ソース） | https://github.com/sc8z35a-collab/html-works-site |

- Cloudflare へ再デプロイ: このフォルダで `npx wrangler deploy`（設定は `wrangler.toml`、静的アセット配信＋ `_headers` でセキュリティヘッダ/キャッシュ付与）
- GitHub Pages は `main` ブランチへのマージで自動更新（Settings → Pages: main / root）

## 作品一覧

| 作品 | ファイル |
|---|---|
| YouTube（UIクローン） | `upload.html` |
| 3D Calculator - Ultra Realistic | `3D.html` |
| Ultra HD Premium Calculator Pro Max | `upload-4.html` |
| Super Stage Maker - Beautiful Edition | `upload-3.html` |
| SCP-1-JP 「凌空」 収容シミュレーター | `SCP-1.html` |
| SCP-4721 Observation Chamber | `SCP-2.html` |
| しょぼんのアクション - HD Remake | `upload-2.html` |
| Infinite Voxel World | `3.1.html` |
| 林野火災シミュレーション | `upload-5.html` |
| AI GENESIS — 6日間の狂詩曲 | `AI.html` |
| 深夜の森 - The Chat Log | `upload-6.html` |
| カロン & コレー — 雑談トーク | `2.html` |
| 三人の雑談 — 手書き × ドローン | `upload-7.html` |

全作品とも単一HTMLファイルで動作し、外部ビルドは不要です。
