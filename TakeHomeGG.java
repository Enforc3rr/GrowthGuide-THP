import java.util.HashMap;

public class TakeHomeGG {
    public static void main(String[] args) {
        TakeHomeGG takeHomeGG = new TakeHomeGG();
        takeHomeGG.analyseMarks(new int[]{22, 19, 33, 40, 90, 83, 32, 75});
    }
    public void analyseMarks(int[] marks){
        HashMap<String , Integer> hashMap = new HashMap<>();
        for(int mark : marks){
            if(mark >=75)
                hashMap.put("Distinct",hashMap.getOrDefault("Distinct",0)+1);
            else if(mark >= 33 )
                hashMap.put("Passed",hashMap.getOrDefault("Passed",0)+1);
            else
                hashMap.put("Failed",hashMap.getOrDefault("Failed",0)+1);
        }
        System.out.print("Students Report = ");
        System.out.println(hashMap);
    }
}
