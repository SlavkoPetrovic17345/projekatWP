using Microsoft.EntityFrameworkCore.Migrations;

namespace Backend.Migrations
{
    public partial class V2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "JMBG",
                table: "Rasporedi",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "LekarID",
                table: "Rasporedi",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Rasporedi_LekarID",
                table: "Rasporedi",
                column: "LekarID");

            migrationBuilder.AddForeignKey(
                name: "FK_Rasporedi_Lekar_LekarID",
                table: "Rasporedi",
                column: "LekarID",
                principalTable: "Lekar",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Rasporedi_Lekar_LekarID",
                table: "Rasporedi");

            migrationBuilder.DropIndex(
                name: "IX_Rasporedi_LekarID",
                table: "Rasporedi");

            migrationBuilder.DropColumn(
                name: "LekarID",
                table: "Rasporedi");

            migrationBuilder.AlterColumn<int>(
                name: "JMBG",
                table: "Rasporedi",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);
        }
    }
}
