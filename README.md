# Discord RPC Maker

<p align="left">
<a href="https://twitter.com/bymnkn" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="bymnkn" height="30" width="40" /></a>
<a href="https://instagram.com/mnkn.x" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="mnkn.x" height="30" width="40" /></a>
<a href="https://www.youtube.com/c/bymnknn" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/youtube.svg" alt="bymnknn" height="30" width="40" /></a>
<a href="https://discordapp.com/users/290675883784667136" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/discord.svg" alt="bymnkn#9999" height="30" width="40" /></a>
</p>

# Gerekli Programlar
Node https://nodejs.org/en/

Git https://git-scm.com/download/win

NotePad++ https://notepad-plus-plus.org/download/

# Kurulum
1- İndirdikten sonra dosyaları zipten çıkarın.

2- Arama yerine cmd yazın ve açılan yere "cd <dosyanızın konumu>" yazın.

3- "npm install discord-rpc" yazın ve indirmesini bekleyin.

4- Ardından https://discordapp.com/developers/applications/me sitesine girin.

5- Bir "Application" yani "App" oluşturun. (Discordda "<app adı> Oynuyor" şeklinde gözükür.)

6- Aşağıdan "Enable Rich Presence" tuşuna basın.

7- En altta bulunan yerden large ve small fotoğraf yükleyin. (yüklerken onlara birer isim koyun ve "Upload Asset"e basın)

8- Üstte bulunan yerden ClientID'yi alın ve ayarlar.json dosyasında bulunan "appid" kısmının önüne koyun.

9- Yazıları düzenlemek için "ayarlar.json" dosyasını açın.

10 - Son olarak onları değiştirip kaydettikten sonra "start.bat" dosyasına çift tıklayın ve çalıştırın.

config.json'da Bulunan Yazıların Anlamları
```` 
{
  "AppID": ""; //oluşturduğumuz application'un ID'si.
  "status": ""; //ilk satırda yazacak olan mesaj.
  "image": ""; //large (büyük) olarak yüklediğimiz fotoğrafa koyduğumuz ad.
  "text": ""; //large (büyük) resime imleç geldiğinde yazacak olan mesaj.
  "button1": "";// ilk button ad.
  "url1": ""; //ilk button URL
  "button2": ""; //ikici button ad.
  "url2": ""; //ikici button URL
}
```` 
