import { Request, Response } from "express";
// this define in seprate compo
export type Resource = "user" | "product" | "order" | "admin";
export type Action = "get" | "create" | "delete" | "put";
export type ApiRoute = `/api/${Resource}/${Action}`;
// 

const userGetRoute: ApiRoute = "/api/user/get";

app.post(userGetRoute, (req: Request, res: Response) => {
  res.send("✅ You called /api/user/get");
});



interface UserRequestBody {
  username: string;
  password: string;
}

app.post("/api/register",(req: Request<{}, {}, UserRequestBody>, res: Response) => {
    const { username, password } = req.body;
    res.send(`Welcome ${username}`);
  }
);

✅ 3. Middleware بطابع TypeScript

function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
}

app.use(logger);
Middleware TypeScript-friendly يخليك تبني أشياء مثل التحقق من المستخدم، التوكن، ... إلخ.


  #type of response 

// types/user.ts
export interface User {
  id: string;
  email: string;
  password?: string;
}

// في ملفات ثانية
import { User } from "./types/user";



interface APIResponse<T> {
  status: "success" | "error";
  data?: T;
  message?:string
}

res.status(200).json<APIResponse<User>>({
  status: "success",
  data: { id: "123", username: "ghaith" },
});
 



enum Role {
  ADMIN = "admin",
  USER = "user",
}

interface User {
  name: string;
  role: Role;
}

const user: User = { name: "ghaith", role: Role.ADMIN };

// ------------------------------------------


Request<Params = any, ResBody = any, ReqBody = any, ReqQuery = ParsedQs>


Request<   {}       ,    {}       ,   UserRequestBody>
         (Params)  (ResBody)   (ReqBody)



// other exmples

// src/index.ts

import express from "express";
import { ApiRoute } from "./routes";

const app = express();
const port = 3000;

// ✅ تعريف المسارات مع أنواع صارمة
const userGetRoute: ApiRoute = "/api/user/get";
const productCreateRoute: ApiRoute = "/api/product/create";

app.use(express.json());

// ✅ مسارات التطبيق
app.post(userGetRoute, (req, res) => {
  res.send("✅ You called /api/user/get");
});

app.post(productCreateRoute, (req, res) => {
  res.send("✅ You called /api/product/create");
});

// ❌ لو كتبت غلط في أي route، TypeScript يعطيك Error
// const invalidRoute: ApiRoute = "/api/usre/delete"; // ← يعطيك خطأ أثناء الكتابة

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});








//


interface UserRequestBody {
  username: string;
  password: string;
}

app.post("/login", (req: Request<{}, {}, UserRequestBody>, res: Response) => {
  const { username, password } = req.body;

  // TypeScript يتأكد من أن username موجود وهو string
  res.send(`Welcome, ${username}`);
});

// route: /user/:id
interface ParamsType {
  id: string;
}

app.get("/user/:id", (req: Request<ParamsType>, res) => {
  const userId = req.params.id;
  res.send(`User ID is ${userId}`);
});

//-----------
interface QueryType {
  search: string;
}

app.get("/search", (req: Request<{}, {}, {}, QueryType>, res) => {
  res.send(`Searching for: ${req.query.search}`);
});

/// other exmple prretty cool



interface User {
  id: string;
  username: string;
}

interface APIResponse<T> {
  status: "success" | "error";
  data?: T;
  message?: string;
}


app.get("/user", (req: Request, res: Response) => {
  const user: User = {
    id: "123",
    username: "ghaith",
  };

  // ✅ نرسل response بنوع معين
  res.status(200).json<APIResponse<User>>({
    status: "success",
    data: user,
    //message  :"you suucess" // you can send this or no 
  });
});



// other exmple

interface User {
  id: string;
  username: string;
}

interface APIResponse<T> {
  status: "success" | "error";
  data?: T;
  message?: string;
}

app.get("/user/:id", (req: Request, res: Response) => {
  const userId = req.params.id;

  // لنفترض ما لقينا المستخدم
  if (userId !== "123") {
    return res.status(404).json<APIResponse<User>>({
      status: "error",
      message: "User not found",
    });
  }

  // لقينا المستخدم
  return res.status(200).json<APIResponse<User>>({
    status: "success",
    data: {
      id: "123",
      username: "ghaith",
    },
  });
});





