const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://davemazino:7RukcOjTa88UYg8f@cluster0.1u6agqh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.+2349132605499 ? process.env.+2349132605599.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_14_06_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDksXG4gICAgICAgIDUzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjksXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDksXG4gICAgICAgIDQ3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyOSxcbiAgICAgICAgNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTM5LFxuICAgICAgICA0NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDksXG4gICAgICAgIDYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTIwLFxuICAgICAgICA5MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDM0LFxuICAgICAgICAzNixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDc1LFxuICAgICAgICAyNixcbiAgICAgICAgNzAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI4LFxuICAgICAgICAyOCxcbiAgICAgICAgOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDc5LFxuICAgICAgICA5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgODMsXG4gICAgICAgIDU5LFxuICAgICAgICA0MixcbiAgICAgICAgMTQ0LFxuICAgICAgICA1MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDUzLFxuICAgICAgICAyOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMCxcbiAgICAgICAgNzksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTM0LFxuICAgICAgICA5MixcbiAgICAgICAgOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDksXG4gICAgICAgIDU4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjIxLFxuICAgICAgICAyNCxcbiAgICAgICAgNjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjM4LFxuICAgICAgICA0NixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTMzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDksXG4gICAgICAgIDk4LFxuICAgICAgICAxMjksXG4gICAgICAgIDQ3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTMyLFxuICAgICAgICA2MyxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTM3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAzNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTUwLFxuICAgICAgICAzOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDYwLFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDk2LFxuICAgICAgICA0NixcbiAgICAgICAgNzIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODIsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0LFxuICAgICAgICA1NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTkxLFxuICAgICAgICA2MixcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTAzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI2LFxuICAgICAgICA4MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDg3LFxuICAgICAgICA0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTk0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTYxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDksXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJnRUpYc0g0aVpPNDhTbTQ0SjN5OTFsanA1bENOczYrMkwrbG1uaTlJY21RPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJxNXNING1kOVFKbTRPdEJsejByekR3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjc0MDlkZmEwLTM2NGMtNDE4Yi1iNDQwLTdiYTA5MDVkYjk1ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTIsXG4gICAgICAxLFxuICAgICAgMTQ5LFxuICAgICAgMjExLFxuICAgICAgMTA3LFxuICAgICAgMjI0LFxuICAgICAgODgsXG4gICAgICA4LFxuICAgICAgMTE1LFxuICAgICAgMjMzLFxuICAgICAgNDMsXG4gICAgICA4MixcbiAgICAgIDIyOCxcbiAgICAgIDE0MCxcbiAgICAgIDYzLFxuICAgICAgMTg0LFxuICAgICAgODEsXG4gICAgICAxNTYsXG4gICAgICAxNDcsXG4gICAgICAxNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA4LFxuICAgICAgMTE5LFxuICAgICAgMTczLFxuICAgICAgMTYsXG4gICAgICAyNDQsXG4gICAgICAxOTEsXG4gICAgICAxODAsXG4gICAgICAyMTUsXG4gICAgICAxOTIsXG4gICAgICA5NyxcbiAgICAgIDk5LFxuICAgICAgODcsXG4gICAgICAxMjAsXG4gICAgICAxNDgsXG4gICAgICAxODMsXG4gICAgICA5MixcbiAgICAgIDUxLFxuICAgICAgMjEwLFxuICAgICAgNTIsXG4gICAgICAyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1WU0zWUszV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEzMjYwNTU5OToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi5LqXz59axYLQm9CkIM+f5LqXXCIsXG4gICAgXCJsaWRcIjogXCIxNTU0MjI0NTEzMDY2NjM6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNcno5dVlHRUtTeTg3TUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkVoWnhwNXB5dk51MVVPb2hVamNqekhIa3ljNEZpQUJZZExRK3hBT3g2MU09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiV1IxTkF5bnMzN3k2dHhseU5XQUpwSTBQRTViVWRBRDEveSt3YzY0L0FtQzV2dEtER3dqRllveGR2akppOTNjeExGOXA2dElxTjNnNzQwdW5zYi93Qmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiR2tQeHZRandwQThETWd3SGVTSW1YbHNXUWlXSzBXdG9QUnk3Sm1BVFpvVWw1NUFTWnhkbHYyVGQxd0hlQWNRcW9wY0Z4SWxiWkV2eUVmbnN4OEJ0anc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEzMjYwNTU5OToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk0NTgwODgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQUVRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBRVC5qc29uIjogIntcImtleURhdGFcIjpcIjZlY2dCVUczVXhWamIxTkR4OVRQdXVsd3JpT2Q2YWJMZlRoWXB5YVNpL3M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTgyNjQ3MDM0NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE5NDU4MDkxNTgzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "Suhail-md", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
