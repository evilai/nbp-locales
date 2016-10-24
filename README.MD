# Locales helpers
This helpers are used for bot's localization. 

First you should import a factory:

```js
import createLocalesFactory from 'nbp-locales';
```

Then you should create whole bot's vocabulary in different languages (`vocabulary.js`):

```js
export default {
    en: {
        // This is a Cluster name
        greetings: {

            // This is a Skill name
            // you can make it deeper if you want to
            greet: (userName) => [
                `Hi ${userName}.`,
                `${userName}. It's been a while.`,
                `Hello.`
            ],

            justGreeted: [
                `We just greeted.`,
                `Ok. Hi. Again.`
            ],

            sarcaticGreet: (userName) => [
                `I'll order vitamins for memory. ;) Hi.`,
                `I can swear that we greeted several times already.`,
                `Are we playing a game or something?`,
                `${userName}, sometimes I have same problems. Just can't remember what I did before. We greeted several times already. I swear.`,
                `I have an idea! Let's stop greeting each other? :P`
            ]
        },

        afairs: {
            afairs: (userName) => [
                `Fine ${userName}, thanks!`,
                `I'm fine, thanks!`,
                `It's ok.`
            ],
            justAskedAfairs: (userName) => [
                `Could be better`,
                `It was OK before you asked. Several times.`,
                `I've talked to hundreds people today, how do you think?`
            ]
        }
    }
};
```

Pass vocabulary to the locales factory ([here where I create it](https://github.com/evilai/nodejs-bot-platform/blob/master/src/bot/platforms/messenger/bot-name/router-builder.js#L32)):

```js
const localesFactory = createLocalesFactory(vocabulary)
```

Then in some Core skill you need to retrieve a language, that your user speaks now and pass it to the bot's context ([check this as an example](https://github.com/evilai/nodejs-bot-platform/blob/master/src/bot/skills/clusters/core/locales.js)):
 
 ```js
 bot.locales = localesFactory('en');
 ```
 
 Afterwards inside other skill just use those locales ([usage example](https://github.com/evilai/nodejs-bot-platform/blob/master/src/bot/skills/clusters/minor/greetings/greet.js#L14)):
 
 ```js
 // CLUSTER_NAME = 'greetings';
 // SKILL_NAME = 'greet';
 bot.locales(`${CLUSTER_NAME}.${SKILL_NAME}`, first_name);
 ```