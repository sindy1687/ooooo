# MP4 影片卡片使用說明

## 功能概述

現在您可以在卡片系統中直接顯示 MP4 影片，而不只是圖片。這個功能讓卡片更加生動有趣！

### 🎯 新的顯示邏輯

1. **MP4 檔案作為主要媒體**：將 MP4 檔案路徑放在 `image` 屬性中，卡片會直接顯示影片
2. **YouTube 影片保持原設定**：YouTube 影片仍然顯示圖片 + 影片按鈕
3. **本地 MP4 影片**：放在 `video` 屬性中的本地 MP4 檔案會直接顯示影片

## 如何使用

### 方法一：使用 image 屬性（推薦）

將 MP4 檔案路徑直接放在 `image` 屬性中，這樣卡片會直接顯示影片而不是圖片：

```javascript
{
  "word": "dancing_cat",
  "zh": "跳舞的貓",
  "image": "sound/dancing_cat.mp4",  // 直接使用 MP4 檔案路徑
  "rarity": "稀有",
  "category": "可愛動物",
  "description": "一隻可愛的貓咪在跳舞"
}
```

### 方法二：使用 video 屬性

將 MP4 檔案路徑放在 `video` 屬性中，卡片會顯示圖片加上影片按鈕：

```javascript
{
  "word": "your_card_name",
  "zh": "您的卡片名稱",
  "image": "img/cards/thumbnail.jpg",  // 縮圖
  "video": "sound/your_video.mp4",    // MP4 影片路徑
  "rarity": "普通",
  "category": "您的類別",
  "description": "卡片描述"
}
```

### 1. 準備 MP4 檔案

將您的 MP4 影片檔案放在專案的適當資料夾中，例如：
- `sound/` 資料夾（用於音效和影片）
- `img/videos/` 資料夾（建議新建）
- 或其他您偏好的資料夾

### 3. 影片檔案要求

- **格式**：MP4
- **大小**：建議不超過 10MB（為了載入速度）
- **解析度**：建議 480p 或更低
- **長度**：建議 5-15 秒的循環影片

### 4. 功能特點

#### 使用 image 屬性的 MP4 卡片（推薦）
- ✅ 直接顯示 MP4 影片作為主要媒體
- ✅ 已解鎖時自動播放並循環
- ✅ 未解鎖時顯示影片第一幀作為縮圖
- ✅ 靜音播放（避免干擾）
- ✅ 點擊控制按鈕可暫停/播放
- ✅ 滑鼠懸停時有特殊效果

#### YouTube 影片（保持原設定）
- ✅ 顯示圖片 + 影片按鈕
- ✅ 點擊按鈕開啟 YouTube 播放器
- ✅ 支援所有 YouTube 影片格式

#### 本地 MP4 影片（video 屬性）
- ✅ 直接顯示 MP4 影片
- ✅ 已解鎖時自動播放並循環
- ✅ 支援播放控制

#### 未解鎖卡片
- ✅ 顯示靜態縮圖或影片第一幀
- ✅ 套用灰階濾鏡效果

#### Modal 檢視
- ✅ 點擊卡片開啟詳細檢視
- ✅ 影片會自動播放
- ✅ 支援全螢幕播放

## 範例卡片

### 類型一：MP4 作為主要媒體（推薦）

```javascript
{
  "word": "dancing_cat",
  "zh": "跳舞的貓",
  "image": "sound/dancing_cat.mp4",  // 直接使用 MP4 檔案
  "rarity": "稀有",
  "category": "可愛動物",
  "description": "一隻可愛的貓咪在跳舞"
}
```

### 類型二：YouTube 影片（保持原設定）

```javascript
{
  "word": "pikachu",
  "zh": "皮卡丘",
  "image": "img/cards/pikachu.jpg",  // 縮圖
  "video": "https://youtu.be/FUNo4aB8xFE",  // YouTube 影片
  "rarity": "超稀有",
  "category": "寶可夢",
  "description": "電力十足的夥伴"
}
```

### 類型三：本地 MP4 影片（video 屬性）

```javascript
{
  "word": "magic_sparkle",
  "zh": "魔法閃爍",
  "image": "img/cards/sparkle_thumbnail.jpg",  // 縮圖
  "video": "sound/magic_sparkle.mp4",          // 本地 MP4 影片
  "rarity": "普通",
  "category": "魔法效果",
  "description": "美麗的魔法閃爍效果"
}
```

## 注意事項

1. **檔案路徑**：確保影片檔案路徑正確
2. **瀏覽器支援**：現代瀏覽器都支援 MP4 格式
3. **載入速度**：影片檔案較大時可能影響載入速度
4. **行動裝置**：在行動裝置上，影片會自動靜音播放

## 故障排除

### 影片無法播放
- 檢查檔案路徑是否正確
- 確認檔案格式為 MP4
- 檢查檔案是否損壞

### 影片載入緩慢
- 壓縮影片檔案大小
- 降低影片解析度
- 使用更短的影片

### 影片無法自動播放
- 確保影片檔案有 `muted` 屬性
- 檢查瀏覽器自動播放設定

## 進階設定

### 自訂影片控制
您可以在 `cards.html` 中修改影片的 CSS 樣式：

```css
.card video.card-media {
  /* 自訂影片樣式 */
  border-radius: 10px;
  object-fit: cover;
}
```

### 調整播放設定
在 JavaScript 中可以調整影片的播放行為：

```javascript
// 在 renderCards 函數中
<video class="card-media" autoplay loop muted playsinline>
  <source src="${videoUrl}" type="video/mp4">
</video>
```

## 支援的檔案格式

目前支援：
- ✅ MP4 (H.264)
- ✅ WebM (部分瀏覽器)
- ❌ AVI (不支援)
- ❌ MOV (不支援)

建議使用 MP4 格式以獲得最佳相容性。 