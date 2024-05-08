import Tag from "../components/base/Tag/Tag";

export default {
  title: "Atoms/Tag",
  component: Tag,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    title: { control: "text" },
  },
  tags: ["autodocs"],
};

export const SmallTag = { args: { size: "small", title: "Small Tag" } };

export const MediumTag = { args: { size: "medium", title: "Medium Tag" } };

export const LargeTag = { args: { size: "large", title: "Large Tag" } };
