This is not markdown.


# setup jekyll serve 

* dont do apt install jekyll

sudo apt-get install ruby-dev

sudo gem install bundler

sudo gem install bundler -v 1.16.3

sudo gem install ffi -v '1.9.18' --source 'https://rubygems.org/'

bundle install



# Jekyll Server

bundle exec jekyll serve
	

# upload at git

git add --all
git commit -m "Initial commit"
git push -u origin master




#md-headings

---
layout: page
permalink: /books/blind-willow/
---

---
layout: post
title: Being Privilaged
published: false
---


---
layout: page
title: Computer Science is Fun
permalink: /cs_is_fun/
---








# Heading
## Sub-heading
### Another deeper heading
 
Paragraphs are separated
by a blank line.

Two spaces at the end of a line leave a  
line break.

Text attributes _italic_, *italic*, __bold__, **bold**, `monospace`.

Horizontal rule:
---

Bullet list:

  * apples
  	- green apple
  	- red apple
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

A [link](http://example.com).





