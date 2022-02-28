import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Article } from "../types";
import React, { SyntheticEvent } from "react";

interface Props {
  articles: Article[];
}

const ArticlesGrid = ({ articles }: Props) => {
  return (
    <>
      {articles.map((article) => (
        <Grid
          key={`article-${article.uuid}`}
          item
          xs={12}
          sm={6}
          lg={4}
          alignItems="stretch"
        >
          <Card sx={{ height: "100%" }}>
            <CardActionArea
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
              onClick={() => {
                window.location.href = article.url;
              }}
            >
              <CardMedia
                component="img"
                image={
                  article.primary_image && Array.isArray(article.primary_image)
                    ? article.primary_image[2].url
                    : article.primary_image
                    ? article.primary_image.url
                    : "bfi-logo.png"
                }
                data-src="bfi-logo.png"
                onError={(e: SyntheticEvent) => {
                  let currentTarget = e.currentTarget as HTMLImageElement;
                  currentTarget.onerror = null;
                  currentTarget.src = "bfi-logo.png";
                }}
                alt={
                  article.primary_image && article.primary_image.alt
                    ? article.primary_image.alt
                    : `Image for ${article.title}`
                }
                sx={{ height: "250px", objectPosition: "top" }}
              />
              <CardContent>
                <div className="article-metadata">
                  <Typography variant="subtitle2" component="span">
                    {article.type.name}
                  </Typography>
                  {article.authors ? (
                    <Typography variant="subtitle2" component="span">
                      {article.authors[0].name}
                    </Typography>
                  ) : (
                    ""
                  )}
                  {/* <Link className="article-author" color="inherit" href={article.authors[0].url}>{article.authors[0].name}</Link> */}
                </div>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{ paddingBottom: "15px" }}
                >
                  {article.title}
                </Typography>
                <Typography variant="body2" component="p">
                  {article.summary.replace(/&#39;/g, "'")}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </>
  );
};
export default ArticlesGrid;
