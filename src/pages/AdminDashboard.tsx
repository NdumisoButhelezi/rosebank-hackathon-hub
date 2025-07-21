import { useState, useEffect } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { db, auth } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { Search } from "lucide-react";

interface Participant {
  uid: string;
  fullName: string;
  email: string;
  institution: string;
  studentClub: string;
  registrationDate: any;
}

const AdminDashboard = () => {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const q = query(collection(db, "participants"), orderBy("registrationDate", "desc"));
    
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const participantsList: Participant[] = [];
      querySnapshot.forEach((doc) => {
        participantsList.push({ uid: doc.id, ...doc.data() } as Participant);
      });
      setParticipants(participantsList);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast({
        title: "Logged Out",
        description: "You have been successfully logged out",
      });
    } catch (error: any) {
      toast({
        title: "Logout Failed",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const exportToCSV = () => {
    const csvContent = [
      ["Name", "Email", "Institution", "Student Club", "Registration Date"],
      ...filteredParticipants.map(p => [
        p.fullName,
        p.email,
        p.institution,
        p.studentClub,
        p.registrationDate?.toDate().toLocaleDateString()
      ])
    ].map(row => row.join(",")).join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "bootcamp-participants.csv";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const filteredParticipants = participants.filter(participant =>
    participant.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    participant.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    participant.institution.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading participants...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>
          <Button onClick={handleLogout} variant="outline">
            Logout
          </Button>
        </div>
      </header>

      <main className="p-6">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">
              Registered Participants ({participants.length})
            </h2>
            <Button onClick={exportToCSV} className="bg-primary hover:bg-primary/90">
              Export to CSV
            </Button>
          </div>

          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search participants..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Institution</TableHead>
                <TableHead>Student Club</TableHead>
                <TableHead>Registration Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredParticipants.map((participant) => (
                <TableRow key={participant.uid}>
                  <TableCell className="font-medium">{participant.fullName}</TableCell>
                  <TableCell>{participant.email}</TableCell>
                  <TableCell>{participant.institution}</TableCell>
                  <TableCell>{participant.studentClub}</TableCell>
                  <TableCell>
                    {participant.registrationDate?.toDate().toLocaleDateString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {filteredParticipants.length === 0 && (
          <div className="text-center py-8">
            <p className="text-muted-foreground">No participants found.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;