import React from "react";
import {
  makeStyles,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  Grid,
} from "@material-ui/core";
import { RepoData } from "./RepoData";
import githubIcon from "./github-svgrepo-com.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 0,
    marginTop: "10px",
    marginBottom: "10px",
    display: "flex",
  },
  card: {
    width: "100%",
    marginLeft: "15px",
    marginRight: "15px",
    margin: "auto",
    transition: "0.3s",
    minHeight: "270px",
    borderRadius: ".625rem!important",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  title: {
    "&:active": {
      color: "#000000",
    },
  },
  cardContent: {
    minHeight: "120px",
  },
  cardActions: {
    padding: "16px",
  },
  avatar: {
    backgroundColor: 'white',
  },
  dot: {
    height: "12px",
    width: "12px",
    borderRadius: "50%",
    display: "inline-block",
  },
}));

interface RepoCardProps {
  repo: RepoData
}

const RepoCard = ({ repo }:RepoCardProps) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} lg={3} className={classes.root}>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              <span
                className="octicon octicon-repo"
                style={{ fontSize: "20px" }}
              >
                <img src={githubIcon} width="40" height="40" alt="GitHub logo"/>
              </span>
            </Avatar>
          }
          title={
            <Typography variant="h6">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.title}
                style={{ textDecoration: "none", color: "#000000" }}
              >
                {repo.name}
              </a>{" "}
            </Typography>
          }
        />

        <CardContent className={classes.cardContent}>
          <Typography variant="body1">{repo.description}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          {repo.language ? (
            <React.Fragment>
              <span
                className={classes.dot}
                style={{ backgroundColor: 'black' }}
              ></span>
              <Typography style={{ marginRight: "10px" }}>
                {repo.language}
              </Typography>
            </React.Fragment>
          ) : null}
          {/* {repo.stargazers_count >= 0 ? (
            <React.Fragment>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  marginRight: "10px",
                  color: "#000000",
                }}
              >
                <span className="octicon octicon-star">
                  {" "}
                  {repo.stargazers_count}
                </span>
              </a>
            </React.Fragment>
          ) : null}
          {repo.forks_count >= 0 ? (
            <React.Fragment>
              <a
                href={`${repo.html_url}/fork`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  marginRight: "10px",
                  color: "#000000",
                }}
              >
                <span className="octicon octicon-repo-forked">
                  {repo.forks_count}
                </span>
              </a>
            </React.Fragment>
          ) : null} */}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default RepoCard;
