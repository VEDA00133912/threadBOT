# threadBOT
メッセージが送信されたときに自動でスレッドを作成するDiscordBOT
<br><br>
## 注意
このBOTは特定のギルドで動作することを前提とした構造になっています<br>
もし複数ギルドで実行したい場合は内容を変更する必要があります<br><br>
<br>
## 起動
・config.jsonにチャンネルIDを入力
```json
{
  "channelId": "チャンネルID"
}
```
・[.env.sample](https://github.com/VEDA00133912/threadBOT/blob/main/.env.sample)の`.sample`を消し、中にtokenを入力
```
token= BOtのtoken
```
・`node.index.js`で起動
## 必要権限
```
ViewChannel, ReadMessageHistory, ManageThreads, CreatePublicThreads
```
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
# threadBOT
DiscordBOT that automatically creates a thread when a message is sent
<br><br>
## CAUTION
This BOT is structured to be run by a specific guild.<br>
If you want to run it with multiple guilds, you will need to change the content slightly
<br>
## Run
・Enter channel ID in config.json
```json
{
  "channelId": "your channelId"
}
```
・Delete the `.sample` part of the [.env.sample](https://github.com/VEDA00133912/threadBOT/blob/main/.env.sample) and enter the token inside
```
token= BOtのtoken
```
・Run in `node.index.js`
## Required Permissons
```
ViewChannel, ReadMessageHistory, ManageThreads, CreatePublicThreads
```
