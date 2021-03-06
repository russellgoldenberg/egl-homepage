<!DOCTYPE html>
<html lang='en'>
	<head>
		<?php include '../head.php' ?>
	</head>
	<body>
		<div id='wrap'>
    		<?php include '../nav.php' ?>
			<!-- <div id='blurb' class='anchor'>
				<div class='row'>
					<div class='whatwedoBody'>
						<p></p>
					</div>
				</div>
			</div> -->
			<div class='container'>
				<div id='darg' class='anchor'>
					<h1>Guidebooks</h1>
					<div class='guidebookBox'>
						<div class='row'>
							<div class='span12'>
								<h2>DARG Guidebook</h2>
							</div>
						</div>
						<div class='row'>
							<div class='span3'>
								<p class='bookImage'>
									<img src='/img/projects/other/darg_guidebook.jpg'>
								</p>
							</div>
							<div class='span9 bookDescription'>
								<p>
									The Design Action Research with Government (DARG) guidebook describes how government, community organizations and academic researchers can collaborate on developing new tools, processes and knowledge for innovating civic life in cities. <br><br>The guide calls for a more deliberate approach to technology experimentation within city government that leads to lasting relationships between organizations and citizens and sharable findings across knowledge networks.
								</p>
							</div>
						</div>
						<div class='row'>
							<div class='span12'>
								<p class='guideLinkP'>
									<a href='/pdfs/darg.pdf' target='_blank'>Click here to download a PDF version</a>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div id='guidebook'>
					<div class='guidebookBox'>
						<div class='row'>
							<div class='span12'>
								<h2>Engagement Game Guidebook</h2>
							</div>
						</div>
						<div class='row'>
							<div class='span3'>
								<p class='bookImage'>
									<img src='/img/projects/other/guidebook_cover_small.jpg'>
								</p>
							</div>
							<div class='span9 bookDescription'>
								<p>
									The Engagement Game Lab has created this guidebook as a resource for people and organizations interested in tapping the power of play to engage people in real-world processes. In the Engagement Game Guidebook you'll learn:
								</p>
								<ul>
									<li>What is an Engagement Game?</li>
									<li>How are they used?</li>
									<li>Who benefits from them and how?</li>
									<li>How do you design one?</li>
									<li>What challenges should you expect to encounter, and how do you address them?</li>
								</ul>
							</div>
						</div>
						<div class='row'>
							<div class='span12'>
								<p class='guideLinkP'>
									<a href='/pdfs/engagement_game_guide.pdf' target='_blank'>Click here to download a PDF version</a>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div id='courses' class='anchor'>
					<div class='row'>
						<div class='span12'>
							<h1>Courses</h1>
						</div>
					</div>
					<div class='row'>
						<div class='span12'>
							<h2 class='courseTitle'>
								VM 420: Games and Social Change
							</h2>
							<p class='professor'>
								PROFESSOR ERIC GORDON
							</p>
							<p class='course'>
								The video game industry is one of the largest sectors of the entertainment industry. But the importance of games goes well beyond industrial silos. Games and game mechanics are factoring into the experience of television, film and the web, and increasingly, into other institutions, including education, democracy and health. What's more, games are being deployed in these contexts to produce real world social change. This class provides students with an introduction to games and game design and gives them the opportunity to partner with the Red Cross / Red Crescent in designing games for real people to solve real humanitarian problems. Students will work in groups, each with a specific geographic and content focus, to design board (or otherwise analog) games and digital prototypes that will be tested and deployed. Prerequisites: Junior standing and some programming or design experience is ideal, but not required.
							</p>
						</div>
					</div>
					<div class='row'>
						<div class='span12'>
							<h2 class='courseTitle'>
								IN 374: Civic Media
							</h2>
							<p class='professor'>
								PROFESSOR JESSE BALDWIN-PHILIPPI
							</p>
							<p class='course'>
								Participating in local life can be difficult. Information is hard to obtain and validate, local meetings are difficult to attend, networks are challenging to build. Increasingly, governments, advocacy groups, community organizers, and individual citizens are looking to digital tools to increase and improve the conditions in which we live and enhance our opportunities to engage.  From electoral politics to global advocacy campaigns to local education planning, digital tools are seen (and often touted!) as the solution, but what actual effects are they having? How are their goals and outcomes any different than what came before? This course uses these overarching questions to ground its investigation of many civic media interventions over time, across diverse contexts, and with numerous goals.
								<br><br>
								This class will not only explore the various goals campaigns are using digital tools to meet, but will also focus on what type of citizen these tools are enabling and encouraging people to become. We will look at academic research surrounding citizenship and engagement in a digital era and cover research into many genres of civic media, from citizen journalism to hackathons. Additionally, it will focus on questions of design: How best can we, as media creators, encourage certain behaviors? What type of citizens are we building when we make design choices?
							</p>
						</div>
					</div>
					<div class='row'>
						<div class='span12'>
							<h2 class='courseTitle'>
								VM 402-03: Cyberactivism: Crashing the System
							</h2>
							<p class='professor'>
								PROFESSOR MARUTA VITOLS
							</p>
							<p class='course'>
								Digital technology has not only allowed for the unprecedented global dissemination of information within the last decades, new media have become a powerful tool for social and political activists everywhere. From the <a href='http://moveon.org' target='_blank'>MoveOn.org</a> movement to the events of the Arab Spring, online social networks provide an influential contemporary forum for advocating for change. This course explores "cyberactivism" both in theory and in practice, investigating the different approaches used today to transform our virtual and real worlds. 
							</p>
						</div>
					</div>
				</div>
			</div>
			<div id='push'></div>
   		</div>
		<?php include '../footer.php' ?>

    	<!-- Los javascripts -->
    	<script src='/js/libs/lab.js'></script>
    	<script>
    		$LAB
    		.script('/js/libs/jquery.min.js').wait()
			.script('/js/libs/bootstrap.min.js');
    	</script>
  </body>
</html>