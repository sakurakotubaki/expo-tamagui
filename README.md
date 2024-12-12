# Expo Tamagui Sample App

このプロジェクトは、Expo と Tamagui を使用したモダンなモバイルアプリケーションのサンプルです。

## 環境構築

### 必要条件
- [bun](https://bun.sh) がインストールされていること
- [Expo Go](https://expo.dev/client) アプリ（iOS/Android）

### セットアップ手順

```bash
# プロジェクトのクローン
git clone https://github.com/sakurakotubaki/expo-tamagui
cd expo-tamagui

# 依存関係のインストール
bun install

# 開発サーバーの起動
bun start
```

## Tamaguiレイアウトガイド

Tamaguiは直感的なレイアウトシステムを提供します。主要なレイアウトコンポーネントと使用方法を説明します。

### 基本的なレイアウトコンポーネント

1. **YStack** - 垂直方向のスタックレイアウト
```tsx
<YStack gap="$4">  // 子要素間の間隔を設定
  <Component1 />
  <Component2 />
</YStack>
```

2. **XStack** - 水平方向のスタックレイアウト
```tsx
<XStack gap="$2">  // 子要素間の間隔を設定
  <Component1 />
  <Component2 />
</XStack>
```

### スペーシング

- `gap` - 要素間の間隔を設定
- `padding` - 内側の余白
- `margin` - 外側の余白

```tsx
<YStack
  gap="$4"         // 子要素間の間隔
  padding="$4"     // 内側の余白
  marginTop="$10"  // 上部の余白
>
```

### フレックスボックスのプロパティ

- `f={1}` - flex: 1 と同等（空きスペースを埋める）
- `alignItems="center"` - 横方向の配置
- `justifyContent="center"` - 縦方向の配置

```tsx
<XStack
  f={1}
  alignItems="center"
  justifyContent="center"
>
```

### サイズ設定

- `width="100%"` - 幅の設定
- `maxWidth={400}` - 最大幅の設定
- `height={200}` - 高さの設定

```tsx
<YStack
  width="100%"
  maxWidth={400}
  alignSelf="center"
>
```

### スタイリング

- `bg="white"` - 背景色の設定
- `borderRadius="$4"` - 角丸の設定
- `borderWidth={1}` - ボーダーの設定

```tsx
<XStack
  bg="$gray3"
  borderRadius="$4"
  padding="$2"
>
```

## プロジェクト構造

```
expo-tamagui/
├── App.tsx          # メインアプリケーションファイル
├── tamagui.config.ts # Tamaguiの設定ファイル
├── babel.config.js   # Babelの設定
└── package.json     # プロジェクトの依存関係
```

## 参考リンク

- [Tamagui Documentation](https://tamagui.dev)
- [Expo Documentation](https://docs.expo.dev)
- [Bun Documentation](https://bun.sh)
