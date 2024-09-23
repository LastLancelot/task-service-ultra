-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cooperation" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Cooperation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsersInCooperation" (
    "cooperation_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "owner_right" BOOLEAN NOT NULL DEFAULT false,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    CONSTRAINT "UsersInCooperation_pkey" PRIMARY KEY ("cooperation_id","user_id")
);

-- AddForeignKey
ALTER TABLE "UsersInCooperation" ADD CONSTRAINT "UsersInCooperation_cooperation_id_fkey" FOREIGN KEY ("cooperation_id") REFERENCES "Cooperation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersInCooperation" ADD CONSTRAINT "UsersInCooperation_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
