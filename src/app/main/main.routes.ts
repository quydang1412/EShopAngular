import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UserComponent } from "./user/user.component";
import { ProductComponent } from "./product/product.component";
import { FunctionComponent } from "./function/function.component";
import { ProductCategoryComponent } from "./product-category/product-category.component";
import { RoleComponent} from "./role/role.component"
export const mainRoutes: Routes = [
    {path:'main', component: HomeComponent},
    {path:'main/product', component: ProductComponent},
    {path:'main/user', component: UserComponent},
    {path:'main/home', component: HomeComponent},
    {path:'main/function', component: FunctionComponent},
    {path:'main/product-category', component: ProductCategoryComponent},
    {path:'main/role', component: RoleComponent}
]