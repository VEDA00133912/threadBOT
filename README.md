# threadBOT
メッセージが送信されたときに自動でスレッドを作成するDiscordBOT
<br><br>
**注意**<br>
このBOTは特定のギルドで動作することを前提とした構造になっています<br>
もし複数ギルドで実行したい場合は内容を変更する必要があります<br><br>
<br>
1: config.jsonにチャンネルIDを入力
```json
{
  "channelId": "チャンネルID"
}
```
2: .env.sampleの`.sample`を消し、中にtokenを入力
```
token= BOtのtoken
```
3: `node.index.js`で起動
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
# threadBOT
DiscordBOT that automatically creates a thread when a message is sent
<br><br>
**CAUTION**<br>
This BOT is structured to be run by a specific guild.<br>
If you want to run it with multiple guilds, you will need to change the content slightly
<br>
1: Enter channel ID in config.json
```json
{
  "channelId": "your channelId"
}
```
2: Delete the `.sample` part of the .env.sample and enter the token inside
```
token= BOtのtoken
```
3: Run in `node.index.js`
