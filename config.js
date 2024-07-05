const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349035471427";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_53_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDYwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDY2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAzNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjM2LFxuICAgICAgICA5MSxcbiAgICAgICAgODEsXG4gICAgICAgIDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzAsXG4gICAgICAgIDg1LFxuICAgICAgICA3MixcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5LFxuICAgICAgICA3NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDU1LFxuICAgICAgICAwLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE5LFxuICAgICAgICA1MixcbiAgICAgICAgNDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODMsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgNCxcbiAgICAgICAgMTczLFxuICAgICAgICA3OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTMsXG4gICAgICAgIDI1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDY4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjUyLFxuICAgICAgICA2NCxcbiAgICAgICAgODYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzMsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDgwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDMxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTY3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDcsXG4gICAgICAgIDgwLFxuICAgICAgICAzMixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDg0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2LFxuICAgICAgICAyOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDUxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2MixcbiAgICAgICAgICAzNixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTksXG4gICAgICAgIDk4LFxuICAgICAgICAyMixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjUzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDksXG4gICAgICAgIDgzLFxuICAgICAgICAxODcsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIktNcGM1UTh0bkdxOVMzUCtENVQydXNIRm5jWFNHQit1TnlEd2Jud3BsZVk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTAzNTQ3MTQyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjA2ODg3QTM3OEJGOTlCNjVEMjhENzM2NjY4REJCRjBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMjA1NjA2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjd4V2tSUDl6UldxUWRERUxkVmdSUndcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTJjNmE5OTAtMjYxYi00OGZiLWIzNDktYTM4MzJlOTg2MDJiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MyxcbiAgICAgIDIwOSxcbiAgICAgIDY2LFxuICAgICAgMTIzLFxuICAgICAgNTEsXG4gICAgICAyMSxcbiAgICAgIDIwNCxcbiAgICAgIDY5LFxuICAgICAgMjA5LFxuICAgICAgMTczLFxuICAgICAgNzYsXG4gICAgICAxMDgsXG4gICAgICAxOTYsXG4gICAgICAyNDksXG4gICAgICAyMDQsXG4gICAgICAyMjAsXG4gICAgICAzMSxcbiAgICAgIDEyMixcbiAgICAgIDcwLFxuICAgICAgNTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQzLFxuICAgICAgMTkzLFxuICAgICAgMTQzLFxuICAgICAgODAsXG4gICAgICAyNDYsXG4gICAgICA4NCxcbiAgICAgIDMxLFxuICAgICAgMTk0LFxuICAgICAgMTA5LFxuICAgICAgMTQ0LFxuICAgICAgMzUsXG4gICAgICAxNjksXG4gICAgICAxMzYsXG4gICAgICAyMTksXG4gICAgICA5OSxcbiAgICAgIDg2LFxuICAgICAgMTUzLFxuICAgICAgMTM2LFxuICAgICAgMjUzLFxuICAgICAgNzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUjg4TjNBUDhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMzU0NzE0Mjc6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNb3ZlXCIsXG4gICAgXCJsaWRcIjogXCI0NDY4OTMwMjU0MDM2NjoyM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKRzc3TUVHRUo2Q29iUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlVKSm5nL29QdUcvWjF4NzJ3clNSd3p6cW9mdHFJbko5ZGErbEhHZjN2MWc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiK2JyblQ1K043b1F4ckZtK3VJNC9VcVREaFo5clNYOEJGOFZNZ0UxRVV3ZDNISU0xWkpzcWhxL0FJZkwweE5iQlE3R25yUnhiRHphUFFIa2tLOTlQQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiL1V4OVBJQS9wNEh3VkxSY2x3blJPblJQU0dJaVBIOHBQakFFSFRkRWNyNFRjOUhZWGpybHEwVitvS0VRWnZ4ZkpEODB1RjZnbHdjTS9namF5YzZZZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAzNTQ3MTQyNzoyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMjA1NjAyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQUNrXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBQ2suanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJaTzlsdHdBcUlvdHJncnlhaE5rdmdZQVdaRWZFeUtzVjRZaVJMbW1hWTJVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3NDg3MDQ2NTYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
