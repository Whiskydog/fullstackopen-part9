import { HealthCheckRating } from "../../types.ts";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";

interface HealthCheckRatingIconProps {
  healthCheckRating: HealthCheckRating;
}

const HealthCheckRatingIcon = ({
  healthCheckRating,
}: HealthCheckRatingIconProps) => {
  switch (healthCheckRating) {
    case HealthCheckRating.Healthy:
      return <FavoriteIcon color="success" />;
    case HealthCheckRating.LowRisk:
      return <FavoriteIcon color="warning" />;
    case HealthCheckRating.HighRisk:
      return <FavoriteIcon color="error" />;
    case HealthCheckRating.CriticalRisk:
      return <HeartBrokenIcon color="error" />;
  }
};

export default HealthCheckRatingIcon;
