---
layout: page
title: "About"
id: "about"
---

I am a Software Engineer at Capital One in Richmond, VA. I am a part of the Technology Development Program (TDP), 
which is a 2 year rotational in which I transition to 2 teams to explore different roles, teams and technologies.
In my first year, I am working in the Shared Tech department as a member of the PRIME team.

![Capital One 2017 TDP Group]({{ site.baseurl }}/img/C1TDP2017.jpg)

I graduated from North Carolina State University in December of 2016 with a B.S. in Computer Science and Economic minor.

![Graduation]({{ site.baseurl }}/img/Graduation.jpg)


I was the 2016 President and Coach of the Cross Country and Track Club at NC State.
I spent time developing specific training plans ranging from the 800m to the 8k.
Our men's and women's team is incredibly successful.
The men won the Southeast Regional titles from 2014-2016, finishing 12th in the nation in 2015 and 2016.
The women won their first regional title in 2016, after improving on 3rd and 2nd place finishes in 214 and 2015, respectively.
In 2015, the women finished 11th in the nation.

![2016 XC Regional Chamipions]({{ site.baseurl }}/img/NCStateClubXC.jpg)

I love to travel! Occasionally, I fly off to the beach, to watch the best athletes in the world, or visit friends in other countries!

![Paris]({{ site.baseurl }}/img/Paris.jpg)

I have a beautiful and incredibly intelligent cat named Maggie!

![Maggie]({{ site.baseurl }}/img/Maggie.jpg)

If you need to contact me, or want more information: 

 - Email: blakelass@gmail.com 
 - [GitHub](https://github.com/balassit/)
 - [LinkedIn](https://www.linkedin.com/in/blake-lassiter-b92bb26b)
 - [NCSU Club XC/Track](https://www.clubs.ncsu.edu/crosscountry/)
 
 You may also submit an email from this form directly.
 
<form class="pure-form pure-form-stacked" id="contactform" method="POST">
    <fieldset>
        <div class="pure-control-group">
            <label for="text">Name</label>  
            <input class="pure-input-1-3" id="name" name="name" type="text" placeholder="Your name">
        </div>
        <div class="pure-control-group">
            <label for="email">Email Address</label>  
            <input class="pure-input-1-3" id="email" name="_replyto" type="text" placeholder="Your email">
        </div>
        <div class="pure-control-group">
            <label for="subject">Subject</label>  
            <input class="pure-input-1-3" id="_subject" name="_subject" type="text" placeholder="Subject">
        </div>
        <div class="pure-control-group">
            <label for="message">Message</label>
            <textarea class="pure-input-1-3" rows="8" id="message" name="message"></textarea>
        </div>
        <div class="pure-controls">
            <button class="pure-button" id="send" name="send">
                Send &nbsp;
                <i class="fa fa-paper-plane"></i>
            </button>
        </div>
    </fieldset>
    <!-- Formspree hidden fields -->
    <input type="hidden" name="_next" value="//balassit.github.io/thankyou" />
    <input type="text" name="_gotcha" style="display:none">
</form>
<script>
    var contactform =  document.getElementById('contactform');
    contactform.setAttribute('action', 'https://formspree.io/' + 'blakelass' + '@' + 'gmail' + '.' + 'com');
</script> 