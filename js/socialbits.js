function buildInsta(data) {
  var instagram = Sheetsee.ich.instagram({
    "rows": getLast(data, 1)
  }, {})
  document.getElementById('instagram').innerHTML = instagram
}

function buildTweet(data) {
  var two = data.slice(Math.max(data.length - 2, 1)).reverse()
  var tweets = two.map(function(t) {
    var tweet = {tweet: findLinks(t)}
    tweet.date = t.date
    return tweet
  })
  var tweet = Sheetsee.ich.tweet({
    "rows": tweets
  }, {})
  document.getElementById('tweet').innerHTML = tweet
}

// get last however many of social bits

function getLast(array, howMany) {
  start = array.length
  cut = start - howMany
  if (start < 12) {
  return array
  } else {
    array = array.splice(cut)
    return array.reverse()
  }
}

// parse tweets

function findLinks(tweet) {
  if (!tweet.tweet) return
  var linkPattern = /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi

    if (!tweet.tweet.match(linkPattern)) {
      return tweetMentions(tweet.tweet)
    } else {
      var links = tweet.tweet.match(linkPattern)
      var linkLinks = linkLink(links)
      var newTweet = injectLinks(tweet.tweet, links, linkLinks)
      return tweetMentions(newTweet)
    }
}

function tweetMentions(tweet, date) {
  if (!tweet) return
  var mentionPattern = /\B@[a-z0-9_-]+/gi

  if (tweet.match(mentionPattern)) {
    var mentions = tweet.match(mentionPattern)
    var linkMentions = linkMention(mentions)
    var newTweet = injectLinks(tweet, mentions, linkMentions)
    return newTweet
  } else { return tweet }
}

function linkMention(mentions) {
  if (!mentions) return
  var linkMentions = []
  mentions.forEach(function(mention){
    var wrap = "<a href='http://www.twittter.com/" + mention + "' target='_blank'>" + mention + "</a>"
    linkMentions.push(wrap)
  })
  return linkMentions
}

function linkLink(links) {
  if (!links) return
  var linkLinks = []
  links.forEach(function(link) {
    link = '<a href="' + link + '" target="_blank">' + link + '</a>'
    linkLinks.push(link)
  })
  return linkLinks
}

function injectLinks(tweet, mentions, linkMentions) {
  for (var i = 0; i <= mentions.length; i++) {
    tweet = tweet.replace(mentions[i], linkMentions[i])
    if (i === mentions.length) return tweet
  }
}
