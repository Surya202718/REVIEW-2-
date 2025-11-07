export default function VirtualTour({ link }) {
  return (
    <div className="virtual-tour">
      <iframe
        src={link}
        title="Virtual Tour"
        allowFullScreen
        loading="lazy"
        style={{ width: "100%", height: "500px", borderRadius: "10px" }}
      ></iframe>
    </div>
  );
}
