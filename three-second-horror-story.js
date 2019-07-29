/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';
const Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = undefined;

const SKILL_NAME = 'Three Second Horror Stories';
// const GET_FACT_MESSAGE = " ";
const HELP_MESSAGE = 'Various short horror stories collected from the Internet. You can say tell me a small story, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
const data = [
    
    'I always thought my cat had a staring problem, she always seemed fixated on my face. Until one day, when I realized that she was always looking just behind me... Written by hangukbrian',
    
    'You hear your mom calling you into the kitchen. As you are heading down the stairs you hear a whisper from the closet saying \"Don\'t go down there honey, I heard it too.\" As told by comparativelysane',
    
    'The grinning face stared at me from the darkness beyond my bedroom window. I live on the 14th floor... written by bentreflection',
    
    'It sat on my shelf, with thoughtless porcelain eyes and the prettiest pink doll dress I could find. Why did she have to be born still? Written by Horseseverywhere',
    
    'I can\'t move, breathe, speak or hear and it\'s so dark all the time. If I knew it would be this lonely, I would have been cremated instead... written by Graboid27',
    
    'She asked why I was breathing so heavily. I wasn\'t... Written by Calamitosity',
    
    'My daughter won\'t stop crying and screaming in the middle of the night. I visit her grave and ask her to stop, but it doesn\'t help... Written by Skuppy',
    
    'Don\'t be scared of the monsters, just look for them. Look to your left, to your right, under your bed, behind your dresser, in your closet but never look up, she hates being seen... Written by AnarchistWaffles',
    
    'I begin tucking him into bed and he tells me, \“Daddy check for monsters under my bed.\” I look underneath for his amusement and see him, another him, under the bed, staring back at me quivering and whispering, \“Daddy there’s somebody on my bed.\”... Written by Juan J Ruiz.',
    
    'Growing up with cats and dogs, I got used to the sounds of scratching at my door while I slept. Now that I live alone, it is much more unsettling... Written by Miami_Metro.',
    
    'She wondered why she was casting two shadows. After all, there was only a single lightbulb... TWritten by pgan91',
    
    '\"I can\'t sleep\" she whispered, crawling into bed with me. I woke up cold, clutching the dress she was buried in... Written by Unknown',
    
    'I woke up to hear knocking on glass. At first, I thought it was the window until I heard it come from the mirror again... Written by therealhatman',
    
    'My grandmother told me that it was a gift to see the angel of death in front of people\'s houses, to know that he\'d be collecting someone there soon. I thought it was a gift too, up until the day I began to see it in front of every house... Written by Ressurection_Man'
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        const factArr = data;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = randomFact;

        this.response.cardRenderer(SKILL_NAME, randomFact);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
