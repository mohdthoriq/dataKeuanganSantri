import PrismaInstance from "./src/database";

async function main() {
    console.log("Checking all tables...");
    const userCount = await PrismaInstance.user.count();
    const instCount = await PrismaInstance.institution.count();
    const santriCount = await PrismaInstance.santri.count();
    const transCount = await PrismaInstance.transaction.count();

    console.log("STATS:", {
        users: userCount,
        institutions: instCount,
        santri: santriCount,
        transactions: transCount
    });
}

main().finally(() => PrismaInstance.$disconnect());
