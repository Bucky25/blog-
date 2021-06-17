import React from 'react';
import './blogs.css'

const Blog = () => {
return (
	<div className="blog">
		<div className="blog__header">
			<h1>Welcome to Blog</h1>
		</div>
		<div className="blog__img">
			<img   src="https://post.healthline.com/wp-content/uploads/2020/07/pizza-beer-1200x628-facebook-1200x628.jpg" />
		</div>
		<div className="blog__content">
			<h1>
				Title/Main Heading of the Blog
			</h1>
			<hr/>
			<p>
				Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
				minutes.Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
				heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
				browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
				and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
				pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
				saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
				without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
				medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
				again without stirring, until mussels have opened and rice is just tender, 5 to 7
				minutes more.Discard any mussels that don't open. Set aside off of the heat to let rest for 10 minutes, and then serve.
			</p>
		</div>
	</div>
);
};

export default Blog;
