<template>
  <h1>About Me</h1>
  <p><b>Hi!</b></p>
  <p>I'm Dinda O'Brien, a fresh software developer transitioning from IT support.</p>
  <p>
    I have a diverse technical background, including asking users if they've restarted 
    their machines, cyber security, network maintenance, systems administration, and now 
    developing web applications.
  </p>
  
  <div class="section">
    <h3>Skills</h3>
    <ul id="skills-list">
      <li>Object-Oriented Programming: Java</li>
      <li>Web Application Development: HTML, CSS, JavaScript, Vue.js, SpringBoot</li>
      <li>Database Programming: JDBC, Table Design, SQL, PostgreSQL, E/R Diagrams</li>
      <li>Development Tools & Techniques: Agile, Unit Testing (JUnit | Vitest), Integration Testing, Git, IntelliJ, VS Code</li>
    </ul>
  </div>

  <div class="section">
    <h3>Personal Life</h3>
    <p>
      When I'm not programming, I'm pretty much everywhere else.
    </p>
    <p>There's a lot of really interesting things out there that I enjoy! Here's a few:</p>
    <p>
      Games, anime, crochet, art, plants, languages, cats, fitness, friends and family, 
      being outside, and anything cute!
    </p>
  </div>
  
  <div class="section">
    <h3>My Philosophy</h3>
    <p>People drive change.</p>
    <p>
      Connection, understanding, empathy, and communication are key to making teams work.
      Software development, while a very technical field, requires a good team dynamic
      as well as the ability to understand how to communicate such complex and technical 
      ideas.
    </p>
    <p>
      On top of all of this: people are human. Rest, constructive feedback,
      and a feeling of safety in their work environments lead to the best teams and the
      best results.
    </p>
  </div>

  <div class="section">
    <h3>Contact Me</h3>
    <p>If you've stumbled across this page, thank you for taking the time to read it!</p>
    <p>I'd love to connect with anyone looking to work on a project, ask for advice, or hire an enthusiastic developer!</p>
    <p>
      Send me an email or feel free to connect with me on LinkedIn (if you could message me 
      so I know you came from this webpage, it's much appreciated!)
    </p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}
#skills-list {
  width: fit-content;
  align-self: center;
  padding-inline-start: 40px;
}
#skills-list li {
  text-align: start;
}
h3 {
  text-decoration: underline;
}
</style>