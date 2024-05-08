import React from "react";
import Typography from "../components/base/Typography/Typography";

export default {
  title: "Typography",
  component: Typography,
};

export const typeTester = () => (
  <>
    <h1 className="text-5xl font-semibold text-primary-800 leading-relaxed">
      Heading 5xl
    </h1>
    <Typography element="p" type="body-xs">
      text-5xl font-semibold text-primary-800 leading-relaxed
    </Typography>
    <h2 className="text-4xl font-semibold text-primary-800 leading-relaxed">
      Heading 4xl
    </h2>
    <Typography element="p" type="body-xs">
      text-4xl font-semibold text-primary-800 leading-relaxed
    </Typography>
    <h3 className="text-3xl font-semibold text-primary-800 leading-relaxed">
      Heading 3xl
    </h3>
    <Typography element="p" type="body-xs">
      text-3xl font-semibold text-primary-800 leading-relaxed
    </Typography>
    <h4 className="text-2xl font-semibold text-primary-800 leading-relaxed">
      Heading 2xl
    </h4>
    <Typography element="p" type="body-xs">
      text-2xl font-semibold text-primary-800 leading-relaxed
    </Typography>
    <h5 className="text-xl font-semibold text-primary-800 leading-relaxed">
      Heading xl
    </h5>
    <Typography element="p" type="body-xs">
      text-xl font-semibold text-primary-800 leading-relaxed
    </Typography>
    <h6 className="text-base font-semibold text-primary-800 leading-relaxed">
      Heading
    </h6>
    <Typography element="p" type="body-xs">
      text-base font-semibold text-primary-800 leading-relaxed
    </Typography>
  </>
);
