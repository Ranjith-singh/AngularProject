import java.util.ArrayList;

import java.util.Arrays;

import java.util.HashMap;

import java.util.List;

import java.util.Map;

import java.util.Scanner;

import java.util.stream.Collectors;
 
/* IMPORTANT: Multiple classes and nested static classes are supported */
 
/*

* uncomment this if you want to read input.

//imports for BufferedReader

import java.io.BufferedReader;

import java.io.InputStreamReader;
 
//import for Scanner and other utility classes

import java.util.*;

*/
 
// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail

// This example design on top has components – Shelve, Draw, Rack and Cabinet. You can see the relationship among the components. For example, you can see that: 3 Shelves can make you 1 Rack, 2 Draws can make you 1 Shelve etc.
// Each design has a simple specification that defines the components and their relationships. The specification for this example design on the left is as follows:
// Shelve,Draw,Rack,Cabinet
// Shelve is 2Draw
// Rack is 3Shelve
// Cabinet is 36Draw
// The team at DIY Kitchen must convert such design specifications to standardized shipping specifications that is easy for their backend staff to understand, build and ship the design. The shipping specification for the example above is illustrated below starting with the largest component at the extreme left, descending to the smaller components on the right, and finally the smallest component at the extreme right.
// 1Cabinet equals 6Rack equals 18shelve equals 36Draw
// Help DIY Kitchen solve this problem of converting any of the design specification in their design library to their corresponding shipping specification. Your program is expected to read design specification as input and produce the corresponding shipping specification as output.
 
class TestClass {

    static class Relation{

        String parent;

        String child;

        long multiplier;

        Relation(String parent, String child, long multiplier){

            this.parent= parent;

            this.child= child;

            this.multiplier= multiplier;

        }

    }

    public static List<String> providedComponents(String components){

        List<String> componentNames= Arrays.stream(components.split(","))

            .map(String::trim)

            .filter(s-> !s.isEmpty())

            .collect(Collectors.toList());
 
        return componentNames;

    }

    public static List<Relation> getRealtions(Scanner sc){

        List<Relation> relations= new ArrayList<>();

        while(sc.hasNextLine()){

            String line= sc.nextLine().trim();

            if(line.isEmpty()) break;

            if(line.contains(" is ")){

                String parts[]= line.split(" is ");

                String parent= parts[0].trim();

                String rightSide= parts[1].trim();

            int i=0;

            while(i< rightSide.length() 
&& Character.isDigit(rightSide.charAt(i))){

                i++;

            }

            if(i>0){

                long multiplier = Long.parseLong(rightSide.substring(0, i));

                String child= rightSide.substring(i).trim();

                relations.add(new Relation(parent, child, multiplier));

            }

            }

        }

        return relations;

    }

    public static Map<String, Double> getMapping(

        List<String> componentsNames,

        List<Relation> relations

        ){

        Map<String, Double> values= new HashMap<>();

        if(!componentsNames.isEmpty()){

            values.put(componentsNames.get(0), 1.0);

        }

        boolean changed= true;

        while(changed){

            changed= false;

            for(Relation rel: relations){

                if(values.containsKey(rel.parent)
&& !values.containsKey(rel.child)){

                    values.put(rel.child,

                    values.get(rel.parent)/rel.multiplier);

                    changed= true;

                }

                else if(values.containsKey(rel.child) 
&& !values.containsKey(rel.parent)){

                    values.put(rel.parent,

                    values.get(rel.child)*rel.multiplier);

                    changed= true;

                }

            }

        }

        return values;

    }

    public static void main(String args[] ) throws Exception {

        /* Sample code to perform I/O:

         * Use either of these methods for input
 
        //BufferedReader

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String name = br.readLine();                // Reading input from STDIN

        System.out.println("Hi, " + name + ".");    // Writing output to STDOUT
 
        //Scanner

        Scanner s = new Scanner(System.in);

        String name = s.nextLine();                 // Reading input from STDIN

        System.out.println("Hi, " + name + ".");    // Writing output to STDOUT
 
        */
 
        // Write your code here
 
        Scanner sc= new Scanner(System.in);

        String components= sc.nextLine();

        List<String> componentsNames= providedComponents(components);

        // System.out.println(componentsList);

        List<Relation> relations= getRealtions(sc);

        Map<String, Double> values= getMapping(componentsNames, relations);
 
        List<String> sortedNames= values.keySet().stream()

            .sorted((a, b)-> values.get(b).compareTo(values.get(a)))

            .collect(Collectors.toList());

        if(!sortedNames.isEmpty()){

            double maxVal= values.get(sortedNames.get(0));

            String output= sortedNames.stream()

                .map(name->{

                    long ratio= Math.round(maxVal/ values.get(name));

                    return ratio+ name;

                })

                .collect(Collectors.joining(" equals "));

            System.out.println(output);

        }

        sc.close();

    }

}

List<String> statuses = new ArrayList<>(Arrays.asList("PENDING", "CANCELLED", "SHIPPED"));
 
for (String status : statuses) {
    if ("CANCELLED".equals(status)) {
        statuses.remove(status); 
    }
}
 
ConcurrentModificationException
