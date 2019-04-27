//const notify = url => {
//  chrome.notifications.create({
//    priority: 2,
//    type    : 'basic',
//    message : `URL: ${url}`,
//    title   : 'Potential XS leak',
//    iconUrl : 'http://cm2.pw/favicon.ico'
//  });
//}

//chrome.notifications.onClicked.addListener(id => {
//    //chrome.notifications.clear(id);
//    //window.open('about:blank', 'xsleaks').document.write(JSON.stringify(PATTERNS));
//});

//chrome.runtime.onMessage.addListener(message => notify(message.url));

const WHITELISTS = `
.mil
.gov
2900larocca.dk
9apps.com
9game.cn
activpn.com
addepar.com
addeparvum.com
aetkasmart.de
affinity.co
agilebits.com
airbnb-aws.com
airbnbcitizen.com
airbnb.com
airtable.com
alditalk-kundenbetreuung.de
algolia.net
algolianet.com
alibaba.com
alibabagroup.com
alibaba-inc.com
alibabapictures.com
alibabaplanet.com
alicdn.com
aliexpress.com
aligame.com
alihealth.cn
alimama.com
alios.cn
alipay.com
aliqin.cn
alisports.com
alitrip.com
aliyun.com
allseason.net
amap.com
amazon.com
angha.me
anghami.com
apinetflix.com
arxius.io
ashleymadison.com
as.im
astaro.at
astaro.ch
astaro.com
astaro.de
astaroedu.com
astaro.info
astaro.net
astaro.org
astaro-security.com
astaro-tech.com
atairbnb.com
authy.com
autoconfig.de
autoconfig.email
autoconfig.nl
autoconfig.w
autodiscover.busines
autodiscover.cn
autodiscover.co
autodiscover.de
autodiscover.e
autodiscover.email
autodiscover.exchange
autodiscover.fr
autodiscover.in
autodiscover.info
autodiscover.nl
autodiscover.ru
autodiscover.u
autodiscover.w
autonavi.com
autumn.net
ayyildiz.de
base.de
berush.com
betterscience.org
binance.com
binary.com
bitbucket.io
bitdefender.com
bitdefender.net
blau.de
blauworld.de
blinksale.com
blogger.com
booztx.com
buddypress.org
bugcrowd.com
buildkiteartifacts.com
buildkiteassets.com
buildkite.com
buildkiteusercontent.com
byairbnb.com
cadre.com
caffeine.tv
cainiao.com
CAR10.net
cash.me
cbhq.net
cesppa.com
claritymoney.com
cobinhood.com
coinbase.com
coinfalcon.com
coinjar.com
colourbox.com
colourbox.de
colourbox.dk
concrete5.org
content.team
cougarlife.com
creditkarma.com
criteo.com
criteo.net
cudasvc.com
custhelp.com
cuvva.co
cuvva.com
cyberoam.com
cylance.com
damai.cn
data.com
dayu.com
defense.gov
deliveroo.com
deliveroo-data.io
deliveroo-data.net
deliveroo-data-test.io
deliveroo.net
delivery-club.ru
detectify.com
dev.media
dev.service
dev.support
dev.tool
dev.travel
digitaloceanspaces.com
dingtalk.com
directly.com
dns.ee
download.im
drchrono.com
drchronomedia.com
duckduckgo.com
dynoquant.com
dyson.com
earn.com
ebay-kleinanzeigen.de
editors.team
electroneum.com
envy.ph
establishedmen.com
etao.com
eventbrite.com
facebook.com
fanduel.com
fb.com
fb.me
fdbox.net
flickr.com
fliggy.com
fonic.de
fonic-mobile.de
force.com
freelancer.com
freemarket.com
freya.net
ftp.eu
ftp.gallery
ftp.in
ftp.media
ftp.new
fuzzing-project.org
fw-notify.net
gatecoin.com
geeny.io
getaltx.com
getmevo.com
getpostman.com
getsentry.com
getsentry.net
getsidekick.com
github.com
gitlab.com
gitter.im
gmail.com
gojekapi.com
goldman.com
goldmansachs.com
goodhire.com
google.com
gotinder.com
grab.co
grab.com
grabtaxi.com
grammarly.io
grammarly.net
gsam.com
gs.com
guardian.service
gusto.com
gusto-demo.com
hacker.one
hackerone.com
hackerone-ext-content.com
hackerone.net
hackerone-user-content.com
hboeck.de
healthifyme.com
highwebmedia.com
hitmanpro.com
hitmanpro.nl
honestdollar.com
hosted.by
hs-sites.com
hubapi.com
hubspot.com
hubspot.net
hulu.com
huluqa.com
ibm.com
icq.com
icq.net
identity.com
igpayment.com
ikarem.io
inbound.org
indeed.com
innogames.com
innogames.de
instagram.com
instapaper.com
intercomassets.com
intercomcdn.com
irccloud-cdn.com
irccloud.com
isc2cares.org
joomla.org
k-classic-mobil.de
kpn.com
labs-semrush.com
lamoda.ru
leantesting.com
leaseweb.com
letgo.com
liberapay.com
liberapay.org
library.co
lifeomic.com
live.com
live.net
livestream.com
load.support
localhost.cc
localhost.live
localhost.net
login.gov
lootdog.io
luxuryretreats.com
lync.com
ly.st
lyst.ca
lyst.com
made.by
magicleap.com
mail.biz
mail.black
mail.ci
mail.co
mail.eu
mail.exchange
mail.fr
mail.info
mail.jp
mail.media
mail.new
mail.pic
mail.plu
mail.support
mail.uk
mail.vip
mail.world
mapbox.com
marcus.com
mei.com
meraki.com
messenger.com
mevo.com
minodes.com
MIT.edu
mixmax.com
mojave.net
mozilla.net
mozilla.org
muscache.com
mx1.email
myastaro.com
mybank.cn
mykeymanager.com
myteksi.com
myteksi.net
naijatuale.com
nerdwallet.com
nero.cc
netflix.com
nettokom.de
network-auth.com
netzclub.net
newrelic.com
nflxext.com
nflximg.net
nflxvideo.net
nitata.com
nolimitvpn.com
norma-mobil.de
notjet.net
o2business.de
o2.de
o2online.de
o2service.de
oath.com
odnoklassniki.ru
office.com
ok.ru
onedrive.com
onpatient.com
ortelmobile.de
outlook.com
overstock.com
owncloud.com
owncloud.help
owncloud.org
owox.com
pandora.com
paydiant.com
paypal.com
payu.com
p-cdn.com
pegasus.cc
periscope.tv
pinterest.com
platform.sh
postman.co
prod.tool
pro.glas
pscp.tv
pstmn.io
purevpn.com
quantshack.com
quora.com
ratelimited.me
reflexion.net
remind.com
rets.io
rets.ly
retsly.com
rocket-internet.com
rocket-internet.de
s48.a
salesforce.com
salesforceiq.com
salesforceliveagent.com
salesforce.org
Sandboxie.com
savagebeast.com
season.net
secnews.gr
securegatewayaccess.com
secure.team
semrush.com
sfox.com
sharepoint.com
shenjing.com
shopify.com
shuqi.com
shuqireader.com
simfinity.de
simple.com
skyfish.com
skyscanner.com
skyscanner.net
sm.cn
smule.com
snapchat.com
soku.com
solarcity.com
sophos.com
spam.cn
spotflux.com
sproutsocial.com
square.com
squareup.com
staging-airtableblocks.com
staging.service
starbucks.ca
starbucks.com
starbucks.de
starbucks.fr
start.ru
summer.net
surfright.nl
sway.com
symphony.com
tech.team
telefonica.de
telegram.org
tesla.cn
tesla.com
teslamotors.com
tesla.service
tesla.services
test2.shop
test.exchange
test.support
theendlessweb.com
thefacebook.com
tinder.com
tmall.com
tornado.ee
tudou.com
tweetdeck.com
twilio.com
twimg.com
twitter.com
uber.com
uberinternal.com
ubnt.com
uc.cn
ucweb.com
udemy.com
umeng.com
upserve.com
upwork.com
urbandictionary.com
urbandictionary.net
vanillacommunities.com
vanilladevelopment.com
vanillaforums.com
vanillastaging.com
venmo.com
veritone.com
vhx.tv
vimeo.com
vine.co
vivy.com
warriorforum.com
webdisk.cloud
webdisk.cn
webdisk.de
webdisk.it
webdisk.me
webdisk.tech
webmail.blog
webmail.support
whatsapp.com
whatsapp.net
whatsappsim.de
who-is-using-me.com
will-never-love.me
withairbnb.com
wolfman.co
wordcamp.org
wordpress.net
wordpress.org
wrath.ph
xiami.com
xoom.com
yahoo.com
yahoo.net
yammer.com
ycombinator.com
yelp.com
youku.com
youneedabudget.com
youtube.com
yunos.com
zellepay.com
zendesk.com
zeus.cc
zmbk.co
zoma.to
zomatobook.com
zomato.com
z.tt
zynga.com
zyngagames.com
`;

const BLACKLISTS = `
https://www.google.com/maps/embed
https://developer.mozilla.org/en-US/docs/
https://www.google.com/(search|recaptcha|sorry)
https://www.youtube.com/(watch|embed|search|results|playlist|channel)
`;

chrome.webRequest.onHeadersReceived.addListener(details=>{
    if(!details.tabId) return;  // return if it's missing tabId- idk
    if(details.method!='GET') return; // return if not GET, assuming POST requests are CSRF protected
    if(details.statusCode!=200) return; // return if not 200Ok, to avoid notifying for unnecessary things
    const init = details.initiator || '';
    if(init && init.startsWith('chrome-extension://')) return;  // return if request initiated from an extension
    const ignoreTypes = 'stylesheet,script,image,font,media,websocket'.split(',');
    if(ignoreTypes.includes(details.type)) return;  // return if not active document
    
    const domain = new URL(details.url).hostname;
    const parts = domain.split('.').reverse();
    const pattern = new RegExp(`^[\\w.]*${parts[1]}\\.${parts[0]}$`, 'mu');
    const match = WHITELISTS.match(pattern);
    if(match && domain.endsWith(match)){
      if(false==BLACKLISTS.split('\n').filter(url=>{return(url && new RegExp('^'+url.replace(/[.*+?\/\\[{'^"}\]&$]/g, '\\$&'), 'mu').test(details.url))})){
        chrome.tabs.sendMessage(details.tabId,  {url:details.url,body:'xsproceed'});
        const validDocs = 'text/html,application/html,text/xml,application/xml,application/xhtml';
        try{
          const headers = JSON.stringify(details.responseHeaders);
          let contentType = headers.match(/content-type","value":"([^"]+?)"/i)[1] || 'text/html';
          if(!validDocs.includes(contentType.split(';')[0])) return;  // return if the document is not an active document
          let xxp = headers.match(/x-xss-protection","value":"([^"]+?)"/i)[1] || 1;
          if(/block/i.test(xxp)) compare(details.url, details.tabId);  // return if xxp is not set to block
        }
        catch(e){
          return;
        }
      }
    }
  },
  {urls: ["<all_urls>"]},
  ["responseHeaders"]
);
