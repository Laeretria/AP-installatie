let endpoint = "http://192.168.1.133";
const usernameKey = "hue_username";
const device = JSON.stringify({"devicetype": "laeretria_ap_installatie"});
const red = 0;
const orange = 3000;
const green = 20000;

let username = null;

async function init() {
    username = await request_username();
}

async function request_username() {
   const res = await fetch(`${endpoint}/api`, {method: "POST", body: device});
   const username = (await res.json())[0]["success"]["username"];
   return username;
}

async function change_hue_to(hue) {
    await fetch(`${endpoint}/api/${username}/lights/1/state`, {method: "PUT", body: JSON.stringify({"on":true, "sat":254, "bri":254,"hue":hue})});
}




init().then(async () => {
    console.log("Philips Hue client initialized.");
});
;