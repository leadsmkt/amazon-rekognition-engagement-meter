import React from "react";
import { Table } from "react-bootstrap";

const filterAndSortEmotions = (face) =>
  Object.keys(face.emotions)
    .map((emotion) => ({
      emotion,
      confidence: face.emotions[emotion],
    }))
    .filter((x) => x.confidence > 0)
    .sort((a, b) => {
      if (a.confidence > b.confidence) {
        return -1;
      } else if (a.confidence < b.confidence) {
        return 1;
      } else return 0;
    });

const EngagementsSummary = ({
  detectedFaces,
  detectedPeople,
  showFaceBoundingBoxes,
  webcamCoordinates,
}) => (
  <div>
    {detectedFaces.map((face, index) => (
      <div key={index}>
        {showFaceBoundingBoxes && (
          <div
            style={{
              border: "1px solid #f0ad4e",
              fontWeight: "bold",
              position: "fixed",
              height: webcamCoordinates.height * face.boundingBox.Height,
              left:
                webcamCoordinates.left +
                face.boundingBox.Left * webcamCoordinates.width,
              top:
                webcamCoordinates.top +
                face.boundingBox.Top * webcamCoordinates.height,
              width: webcamCoordinates.width * face.boundingBox.Width,
            }}
          >
            Personne #{index + 1}
          </div>
        )}
        <Table responsive>
          <thead>
            <tr>
              <th>Personne #{index + 1}</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Age</td>
              <td>
                {face.ageLow} - {face.ageHigh} ans
              </td>
            </tr>
            {filterAndSortEmotions(face).map(({ emotion, confidence }) => (
              <tr key={emotion}>
                <td>{emotion}</td>
                <td>{confidence}%</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    ))}
    {detectedPeople.map((person) => (
      <p key={person.externalImageId}>
        Welcome <b>{person.memberName}</b> ({person.jobTitle})
      </p>
    ))}
  </div>
);

export default EngagementsSummary;
