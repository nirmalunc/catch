import React from 'react'
import { Card, Row, Col } from "react-bootstrap";

export default function News() {
  return (
    <div>
      <h1><b>News</b></h1>
  const ArticleCard = ({ image, title, caption, link }) => {
  return (
    <Col md={6} className="mb-4">
      <Card>
        <Card.Img variant="top" src={image} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{caption}</Card.Text>
          <a href={link} target="_blank" rel="">
          </a>
        </Card.Body>
      </Card>
    </Col>
  );
};

const ArticleGrid = () => {
  const articles = [
    {
      id: 1,
      image: "",
      title: "'It's a rewarding experience': Children with disabilities get toys modified for them by UNC students",
      caption: "The students work all year holding bake sales and community benefit nights to make the money to buy the toys.",
      link: "https://abc11.com/children-disabilities-toys-modified-unc-engineer-students/12602887/",
    },
    {
      id: 2,
      image: "",
      title: "Making more accessible toys | UNC-Chapel Hill",
      caption: "The Tar Heels behind the CATCH student organization modify toys for children with disabilities and donate them to local medical facilities for children who need them.",
      link: "https://www.unc.edu/discover/making-more-accessible-toys/",
    },
    {
      id: 3,
      image: "",
      title: "Senior communities are taking care off-campus (free version)",
      caption: "Plus: Apartments planned for Camp North End?; College students adapt toys for kids with special needs; Good Fellows brings in record $2M for charity; Opening day for Pickleball Charlotte",
      link: "https://charlotteledger.substack.com/p/senior-communities-are-taking-care-a37#%C2%A7unc-student-organization-catches-children-who-fall-through-the-cracks-of-the-commercial-toy-industry",
    },
    {
      id: 5,
      image: "",
      title: "Senior communities are taking care off-campus (free version)",
      caption: "Plus: Apartments planned for Camp North End?; College students adapt toys for kids with special needs; Good Fellows brings in record $2M for charity; Opening day for Pickleball Charlotte",
      link: "https://studentaffairs.unc.edu/student-org-spotlight-carolina-adapts-toys-for-children/",
    },
    {
      id: 5,
      image: "",
      title: "Student Org Spotlight: CATCH",
      caption: "Plus: Apartments planned for Camp North End?; College students adapt toys for kids with special needs; Good Fellows brings in record $2M for charity; Opening day for Pickleball Charlotte",
      link: "https://charlotteledger.substack.com/p/senior-communities-are-taking-care-a37#%C2%A7unc-student-organization-catches-children-who-fall-through-the-cracks-of-the-commercial-toy-industry",
    },
    {
      id: 6,
      image: "",
      title: "Example Article Title 6",
      caption: "Looking to learn something new? Join Carolina Adapts Toys for Children (CATCH) weekly to help adapt toys for children with special needs! PR Chair Katie Chai shares more about the team.",
      link: "https://studentaffairs.unc.edu/student-org-spotlight-carolina-adapts-toys-for-children/",
    },
    {
      id: 7,
      image: "",
      title: "Example Article Title 7",
      caption: "This is a brief description of the article 7.",
      link: "https://www.dailytarheel.com/article/2022/10/university-catch-feature",
    },
    {
      id: 8,
      image: "",
      title: "Students work to 'CATCH’ kids with disabilities who fall through cracks of toy design",
      caption: "Sophomore Katie Chai never imagined her interest in technology would lead her to the basement in Phillips Hall modifying popular children’s toys. However, that is exactly where she found herself after she joined Carolina Adapts Toys for Children, affectionately known as "CATCH.",
      link: "https://www.dailytarheel.com/article/2022/10/university-catch-feature",
    },
  ];

  return (
    <Row>
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          image={article.image}
          title={article.title}
          caption={article.caption}
          link={article.link}
        />
      ))}
    </Row>
  );
};

export default ArticleGrid;
 
    </div>
)
}
