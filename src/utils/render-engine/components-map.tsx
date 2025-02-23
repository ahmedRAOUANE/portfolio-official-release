import { JSX } from "react";
import { CustomElement } from "../types";
import Section from "@/components/core-components/section";
import Container from "@/components/core-components/container";
import Typography from "@/components/core-components/typography";
import MediaFile from "@/components/core-components/media-files";

const parse = (obj: CustomElement[]): (JSX.Element | null)[] => {
    return obj.map((item, index) => {
        switch (item.type) {
            case "section":
                return <Section key={index} {...item.props}>{item.children && Array.isArray(item.children) && item.children.every((child) => 'type' in child) ? parse(item.children as CustomElement[]) : null}</Section>;
            case "container":
                return <Container key={index} {...item.props} variant="div">{item.children && Array.isArray(item.children) && item.children.every((child) => 'type' in child) ? parse(item.children as CustomElement[]) : null}</Container>;
            case "paragraph":
                return <Typography key={index} {...item.props} variant="p">{item.children && item.children[0] && 'text' in item.children[0] ? item.children[0].text : null}</Typography>;
            case "heading-one":
                return <Typography key={index} {...item.props} variant="h1">{item.children && item.children[0] && 'text' in item.children[0] ? item.children[0].text : null}</Typography>;
            case "heading-two":
                return <Typography key={index} {...item.props} variant="h2">{item.children && item.children[0] && 'text' in item.children[0] ? item.children[0].text : null}</Typography>;
            case "heading-three":
                return <Typography key={index} {...item.props} variant="h3">{item.children && item.children[0] && 'text' in item.children[0] ? item.children[0].text : null}</Typography>;
            case "heading-four":
                return <Typography key={index} {...item.props} variant="h4">{item.children && item.children[0] && 'text' in item.children[0] ? item.children[0].text : null}</Typography>;
            case "heading-five":
                return <Typography key={index} {...item.props} variant="h5">{item.children && item.children[0] && 'text' in item.children[0] ? item.children[0].text : null}</Typography>;
            case "heading-six":
                return <Typography key={index} {...item.props} variant="h6">{item.children && item.children[0] && 'text' in item.children[0] ? item.children[0].text : null}</Typography>;
            case "image":
                return <MediaFile key={index} {...item.props} type="image" src={item.children && item.children[0] && 'src' in item.children[0] ? item.children[0].src : ""} alt={item.children && item.children[0] && 'alt' in item.children[0] ? item.children[0].alt : ""} />
            case "video":
                return <MediaFile key={index} {...item.props} type="video" src={item.children && item.children[0] && 'src' in item.children[0] ? item.children[0].src : ""} alt={item.children && item.children[0] && 'alt' in item.children[0] ? item.children[0].alt : ""} />
            default:
                return null;
        }
    })
};

export default parse;

