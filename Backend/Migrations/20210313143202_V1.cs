using Microsoft.EntityFrameworkCore.Migrations;

namespace Backend.Migrations
{
    public partial class V1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PrivatneKlinike",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Naziv = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    BrojLekara = table.Column<int>(type: "int", nullable: false),
                    Termina = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PrivatneKlinike", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Lekar",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Ime = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Prezime = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Specijalizacija = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    KlinikeID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Lekar", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Lekar_PrivatneKlinike_KlinikeID",
                        column: x => x.KlinikeID,
                        principalTable: "PrivatneKlinike",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Rasporedi",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Ime = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Prezime = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    JMBG = table.Column<int>(type: "int", nullable: false),
                    X = table.Column<int>(type: "int", nullable: false),
                    Y = table.Column<int>(type: "int", nullable: false),
                    TipBoja = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    KlinikeID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Rasporedi", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Rasporedi_PrivatneKlinike_KlinikeID",
                        column: x => x.KlinikeID,
                        principalTable: "PrivatneKlinike",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Lekar_KlinikeID",
                table: "Lekar",
                column: "KlinikeID");

            migrationBuilder.CreateIndex(
                name: "IX_Rasporedi_KlinikeID",
                table: "Rasporedi",
                column: "KlinikeID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Lekar");

            migrationBuilder.DropTable(
                name: "Rasporedi");

            migrationBuilder.DropTable(
                name: "PrivatneKlinike");
        }
    }
}
