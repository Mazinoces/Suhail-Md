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
global.owner= process.env.+2348074439626 ? process.env.+2348074439626.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_08_06_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTc4LFxuICAgICAgICA2NixcbiAgICAgICAgODIsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDUwLFxuICAgICAgICA1MixcbiAgICAgICAgODgsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDMzLFxuICAgICAgICA5NyxcbiAgICAgICAgNzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNixcbiAgICAgICAgMTksXG4gICAgICAgIDY0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTUwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzksXG4gICAgICAgIDksXG4gICAgICAgIDI5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDc0LFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzksXG4gICAgICAgIDIxNyxcbiAgICAgICAgODIsXG4gICAgICAgIDkwLFxuICAgICAgICA1MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgxLFxuICAgICAgICA4MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMixcbiAgICAgICAgMTgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDgwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAzMCxcbiAgICAgICAgODAsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDkzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMixcbiAgICAgICAgMTkyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODQsXG4gICAgICAgIDU2LFxuICAgICAgICAzLFxuICAgICAgICA2OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDYsXG4gICAgICAgIDg4LFxuICAgICAgICAyNixcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDksXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTksXG4gICAgICAgIDEzNixcbiAgICAgICAgNzYsXG4gICAgICAgIDczLFxuICAgICAgICAxODMsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzLFxuICAgICAgICAzNixcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTUxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwLFxuICAgICAgICA4MixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwLFxuICAgICAgICA4NCxcbiAgICAgICAgODksXG4gICAgICAgIDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjMyLFxuICAgICAgICA5LFxuICAgICAgICAxNjksXG4gICAgICAgIDc0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTgsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDk3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI5dUlJSGNCc2hZeE13Z0VZWUFZcWNVUkV6dk9kam9KdURIcklaWlpZSjFnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJacTlNcE91bFFpZXoxNWNjY215SlVRXCIsXG4gIFwicGhvbmVJZFwiOiBcImM1NTI2ZGM0LTkwMTctNDU3ZS05Zjc4LThjNzhiNDNiNDgwNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0OCxcbiAgICAgIDE4OCxcbiAgICAgIDIzOCxcbiAgICAgIDIyNixcbiAgICAgIDUxLFxuICAgICAgMjEwLFxuICAgICAgNCxcbiAgICAgIDE1OSxcbiAgICAgIDIyMCxcbiAgICAgIDE3NyxcbiAgICAgIDExMyxcbiAgICAgIDIwNCxcbiAgICAgIDc1LFxuICAgICAgMTc2LFxuICAgICAgMTUzLFxuICAgICAgMTg0LFxuICAgICAgMjMwLFxuICAgICAgMjUxLFxuICAgICAgMjI5LFxuICAgICAgMjA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MCxcbiAgICAgIDkwLFxuICAgICAgMjEyLFxuICAgICAgMjEwLFxuICAgICAgMjAyLFxuICAgICAgNTIsXG4gICAgICAyMTAsXG4gICAgICAxMTMsXG4gICAgICAzLFxuICAgICAgMzksXG4gICAgICAyMDksXG4gICAgICAxNzcsXG4gICAgICAxNTIsXG4gICAgICAyMzksXG4gICAgICAxNDcsXG4gICAgICAxOTEsXG4gICAgICAxOTEsXG4gICAgICAyMjUsXG4gICAgICAxODAsXG4gICAgICAxNDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiN1dHRjZCQUpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNzQ0Mzk2MjY6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTU4ODcxMjkzMjY0MDEwOjFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi4bS14bSs4bS544Cy4LyS0LzOsXrOudC4zr/htLDhtL/htLHhtKzhtLDgvJJcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOdnFzdFVDRUxDRjZiTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjVZaG5zSnhKZVJhakdSV2pZbStMU0hpL1l2N2VoWWoyYXJ0YS9TRit5eWs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSlYwTCtyV2RFMGZhQjUzR1psQmdaS2tqMzI0TG4rM1dsbjdrdlJvZVF4RE1nc3A3ekhSVFFKZUdwRXZTWGpaQi9QNVFnMzRBaHFxdG5PU0g4NW12QXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVGdPTUxMRThkQUVrRnQvSFJBMExMbXFkQnRPTlhNMTg4R0pIVFp2WUxSTXFsSXllc3kzakowRklXekdnM0lhRWJHdUwwaTk2TFlIY0FPbHAwdUtRQ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA3NDQzOTYyNjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDQxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTkyODg1MDAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFcTdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVxNy5qc29uIjogIntcImtleURhdGFcIjpcIi9ZN0RES1R1cHd1eTdUYWVsRmo1djJqNFYzeHcybmtjSDhQS09kRFdIaTA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE1OTYxNjkxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTkyODg1MDUxODlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

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
