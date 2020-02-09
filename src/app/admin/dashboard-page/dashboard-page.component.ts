import { Component, OnInit, OnDestroy } from "@angular/core";
import { PostsService } from "src/app/shared/posts.service";
import { Post } from "src/app/shared/interfaces";
import { Subscription } from "rxjs";

@Component({
  selector: "app-dashboard-page",
  templateUrl: "./dashboard-page.component.html",
  styleUrls: ["./dashboard-page.component.scss"]
})
export class DashboardPageComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  pSub: Subscription;
  searchStr = "";
  constructor(private postService: PostsService) {}

  remove(id: string) {}

  ngOnInit() {
    this.pSub = this.postService.getAll().subscribe(posts => {
      this.posts = posts;
    });
  }
  ngOnDestroy(): void {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }
  }
}
