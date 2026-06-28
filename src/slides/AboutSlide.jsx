export default function AboutSlide() {
  const birthDate = new Date(2002, 8, 7);
  const ageDiff = new Date().getTime() - birthDate.getTime();
  const age = Math.floor(ageDiff / (1000 * 60 * 60 * 24 * 365.25));

  return (
    <div className="slide" id="slide-about">
      <div className="content">
        <h1>About me</h1>
        <div className="block">
          <span>
            <br />
            <strong>
              My name is Łukasz (eng. <b>Luke</b>) alias <b>Wardiusz</b>. I&apos;m from <b>Poland</b>. Age <b>{age}</b>.{' '}
              <b>Passionate programmer</b> who wants to make useful, secure and enjoyable stuff.{' '}
              Student of{' '}
              <a href="https://pja.edu.pl/en/" target="_blank" rel="noreferrer"><b>Polish-Japanese Academy of Information Technology</b></a>{' '}
              in short{' '}
              <a href="https://pja.edu.pl/en/" target="_blank" rel="noreferrer"><b>PJAIT</b></a>.{' '}
              Aspiring <b>Fullstack Developer</b>.{' '}
              <b>Open minded</b> on ever changing world and it&apos;s people.{' '}
              <b>Fast learner</b> who tries to learn new things everyday.{' '}
              Big weeb, musician, gamer, car, motorcycle and gun enthusiast and of course programmer.{' '}
              <b>All of it describes me best</b>.{' '}
              <i>I use arch btw.</i>
            </strong>
          </span>
        </div>
      </div>
    </div>
  );
}
