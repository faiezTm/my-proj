import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  Post=[
    {
       title: 'Mon Premier Post',
       content: 'One of the best mommy bloggers around, Joanna has a really simple looking blog, full to the brim of useful stuff for old and new mothers alike. What I love about this site is the simplicity of the theme, the really current design features and the typography. The blog post ideas are really clever as well and sets Jo’s site apart from all the other mommy bloggers',
       loveIts: 0,
       created_at: new Date("February 4, 2016 10:13:00")
     } ,
     
     {
       title: 'Mon deuxième Post',
       content: 'Another well thought out and well designed mommy blog. This blog is quite varied in its content as its got a little bit of everything. If you love all things parenting, cooking with kids, craft with the children, health, family travel, stories, charity etc. then this site will give you plenty of inspiration on how you could start your own mommy blog',
       loveIts: 0,
       created_at: new Date("February 4, 2016 10:13:00")
     } ,
     {
       title: 'Mon troisième Post',
       content: 'One of my favourite type of Blog is the “tech blog”.  Now this isn’t something new to blog about, as Tech bloggers have been blogging about technology news and gadget reviews in detail online since the beginning of the internet, But because it’s such a vast niche, you could carve out yourself a really good angle within the tech blog sphere. The trick is to have your own take on tech and don’t just follow the trend. One area which hasn’t really been covered specifically is eco tech, so something to think about. Maybe a blog specifically covering tech aimed at becoming more environmentally conscious',
       loveIts: 0,
       created_at:new Date("February 4, 2016 10:13:00")
     } 
   ];

}
