import Star from "./Star";

function createStarsList(starsCount: number) {
  const starsList = [];

  for(let i = 0; i < starsCount; i++) {
    starsList.push(<Star key={i} filled={true} />);
  }
  if (starsList.length < 5) {
    const filledStars = starsList.length;
  
    for (let i = filledStars + 1; i <= 5; i++) {
      starsList.push(<Star key={i} filled={false} />);
    }
  }

  return starsList;
}

export default createStarsList;