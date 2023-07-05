import React from "react";
import Card from "react-bootstrap/Card";

const Player = ({
  name = "Unknown",
  team = "Unknown",
  nationality = "Unknown",
  jerseyNumber = "Unknown",
  age = "Unknown",
  imageUrl
}) => {
  
  const cardStyle = {
    width: "18rem",
    border: "1px solid #ccc",
    borderRadius: "6px",
    marginBottom: "20px",
    padding: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  };



  const imageStyle = {
    width: "100px" // Adjust the width value as per your requirement
  };

  return (
    <Card style={cardStyle}>
      {imageUrl && <Card.Img variant="top" src={imageUrl} alt={name} style={imageStyle} />}
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Team: {team}</Card.Text>
        <Card.Text>Nationality: {nationality}</Card.Text>
        <Card.Text>Jersey Number: {jerseyNumber}</Card.Text>
        <Card.Text>Age: {age}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
