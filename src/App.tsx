import React, { useEffect, useState } from "react";
import "./App.css";
import Layout from "./components/layout";
import { Divider, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Pagination from "./components/pagination";
import { Article } from "./types";
import ArticlesGrid from "./components/articles-grid";
import FiltersForm from "./components/filters-form";
import Overlay from "./components/overlay";

function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [lastPage, setLastPage] = useState<number>(0);
  const [author, setAuthor] = useState("");
  const [type, setType] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (articles.length === 0) {
      setIsLoading(true);
      fetch("https://content-store.explore.bfi.digital/api/articles?size=9")
        .then((res) => res.json())
        .then((res) => {
          setArticles(res.data as Article[]);
          setCurrentPage(res.meta.current_page);
          setLastPage(res.meta.last_page);
          setIsLoading(false);
        });
    }
  }, [articles]);

  const changePage = (page: number) => {
    setIsLoading(true);
    fetch(
      `https://content-store.explore.bfi.digital/api/articles?page=${page}&size=9${
        author ? `&author=${author}` : ""
      }${type ? `&type=${type}` : ""}`
    )
      .then((res) => res.json())
      .then((res) => {
        setArticles(res.data as Article[]);
        setCurrentPage(parseInt(res.meta.current_page));
        setLastPage(parseInt(res.meta.last_page));
        setIsLoading(false);
      });
  };

  const updateFilters = (author: string, type: string) => {
    setIsLoading(true);
    fetch(
      `https://content-store.explore.bfi.digital/api/articles?page=1&size=9${
        author ? `&author=${author}` : ""
      }${type ? `&type=${type}` : ""}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        setArticles(res.data as Article[]);
        setCurrentPage(parseInt(res.meta.current_page));
        setLastPage(parseInt(res.meta.last_page));
        setAuthor(author);
        setType(type);
        setIsLoading(false);
      });
  };

  return (
    <Layout>
      <Overlay isLoading={isLoading} />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography
            variant="h1"
            align="center"
            color="text.primary"
            component="h1"
          >
            BFI articles site
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            component="p"
          >
            Below you'll find all of the articles exposed through the BFI api.
            Feel free to have a look around!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <FiltersForm updateFilters={updateFilters} />
        </Grid>
        <ArticlesGrid articles={articles} />
        {currentPage && lastPage && (
          <Grid item xs={12}>
            <Divider />
            <Pagination
              currentPage={currentPage}
              lastPage={lastPage}
              onPageChange={changePage}
            />
          </Grid>
        )}
      </Grid>
    </Layout>
  );
}

export default App;
